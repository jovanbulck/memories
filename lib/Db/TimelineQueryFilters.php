<?php

declare(strict_types=1);

namespace OCA\Memories\Db;

use OCA\Memories\Util;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\DB\QueryBuilder\IQueryFunction;
use OCP\ITags;

// Wikipedia defines a panoramic image as having an aspect ratio of at least 2:1,
// but some phones approach this with regular photos. Hence, we conservatively set
// the threshold to 3:1 for true panoramas.
const PANOROMA_ASPECT_RATIO = 3;

trait TimelineQueryFilters
{
    public function transformFavoriteFilter(IQueryBuilder &$query, bool $aggregate): void
    {
        if (Util::isLoggedIn()) {
            $query->innerJoin('m', 'vcategory_to_object', 'vcoi', $query->expr()->andX(
                $query->expr()->eq('vcoi.objid', 'm.fileid'),
                $query->expr()->in('vcoi.categoryid', $this->getFavoriteVCategoryFun($query)),
            ));
        }
    }

    public function addFavoriteTag(IQueryBuilder &$query): void
    {
        if (Util::isLoggedIn()) {
            $query->leftJoin('m', 'vcategory_to_object', 'vco', $query->expr()->andX(
                $query->expr()->eq('vco.objid', 'm.fileid'),
                $query->expr()->in('vco.categoryid', $this->getFavoriteVCategoryFun($query)),
            ));
            $query->addSelect('vco.categoryid');
        }
    }

    public function transformVideoFilter(IQueryBuilder &$query, bool $aggregate): void
    {
        $query->andWhere($query->expr()->eq('m.isvideo', $query->expr()->literal(1)));
    }

    public function transformLivePhotoFilter(IQueryBuilder &$query, bool $aggregate): void
    {
        $query->andWhere($query->expr()->neq('m.liveid', $query->expr()->literal('')));
    }

    public function transformPanoFilter(IQueryBuilder &$query, bool $aggregate): void
    {
        $query->andWhere('m.w >= '.PANOROMA_ASPECT_RATIO.' * m.h');
    }

    public function transformUser(IQueryBuilder &$query, bool $aggregate, string $user): void
    {
        $userArray = explode(',', $user);
        $query->andWhere($query->expr()->notIn('m.uid', $query->createNamedParameter($userArray, IQueryBuilder::PARAM_STR_ARRAY)));
    }

    public function transformMedia(IQueryBuilder &$query, bool $aggregate, string $media): void
    {
        $mediaTypesArray = explode(',', $media);

        if (\in_array('video', $mediaTypesArray, true)) {
            $query->andWhere($query->expr()->eq('m.isvideo', $query->expr()->literal(0)));
        }
        if (\in_array('livePhoto', $mediaTypesArray, true)) {
            $query->andWhere($query->expr()->eq('m.liveid', $query->expr()->literal('')));
        }
        if (\in_array('pano', $mediaTypesArray, true)) {
            $query->andWhere('m.w < '.PANOROMA_ASPECT_RATIO.' * m.h');
        }
        if (\in_array('photo', $mediaTypesArray, true)) {
            $query->andWhere(
                $query->expr()->orX(
                    $query->expr()->eq('m.isvideo', $query->expr()->literal(1)),
                    $query->expr()->neq('m.liveId', $query->expr()->literal('')),
                    'm.w >= '.PANOROMA_ASPECT_RATIO.' * m.h',
                ),
            );
        }
    }

    public function transformLimit(IQueryBuilder &$query, bool $aggregate, int $limit): void
    {
        /** @psalm-suppress RedundantCondition */
        if ($limit >= 1 || $limit <= 100) {
            $query->setMaxResults($limit);
        }
    }

    private function applyAllTransforms(array $transforms, IQueryBuilder &$query, bool $aggregate): void
    {
        foreach ($transforms as &$transform) {
            $fun = \array_slice($transform, 0, 2);
            $params = \array_slice($transform, 2);
            array_unshift($params, $aggregate);
            array_unshift($params, $query);
            $fun(...$params);
        }
    }

    private function getFavoriteVCategoryFun(IQueryBuilder &$query): IQueryFunction
    {
        $sub = $query->getConnection()->getQueryBuilder();
        $sub->select('id')
            ->from('vcategory', 'vc')
            ->where($sub->expr()->andX(
                $sub->expr()->eq('type', $sub->expr()->literal('files')),
                $sub->expr()->eq('uid', $query->createNamedParameter(Util::getUID())),
                $sub->expr()->eq('category', $sub->expr()->literal(ITags::TAG_FAVORITE)),
            ))
        ;

        return SQL::subquery($query, $sub);
    }
}
