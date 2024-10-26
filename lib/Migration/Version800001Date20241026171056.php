<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later.
 */

namespace OCA\Memories\Migration;

use OCP\DB\ISchemaWrapper;
use OCP\IDBConnection;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/**
 * FIXME Auto-generated migration step: Please modify to your needs!
 */
class Version800001Date20241026171056 extends SimpleMigrationStep
{
    public function __construct(private IDBConnection $dbc) {}

    /**
     * @param \Closure(): ISchemaWrapper $schemaClosure
     */
    public function preSchemaChange(IOutput $output, \Closure $schemaClosure, array $options): void {}

    /**
     * @param \Closure(): ISchemaWrapper $schemaClosure
     */
    public function changeSchema(IOutput $output, \Closure $schemaClosure, array $options): ?ISchemaWrapper
    {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();
        if (!$schema->hasTable('memories')) {
            throw new \Exception('Memories table does not exist');
        }

        $table = $schema->getTable('memories');

        if (!$table->hasColumn('uid')) {
            $table->addColumn('uid', 'string', [
                'notnull' => true,
                'length' => 64,
            ]);
        }

        return $schema;
    }

    /**
     * @param \Closure(): ISchemaWrapper $schemaClosure
     */
    public function postSchemaChange(IOutput $output, \Closure $schemaClosure, array $options): void
    {
        try {
            $output->info('Migrating values for uid from fileid');

            $platform = $this->dbc->getDatabasePlatform();

            // copy existing parent values from filecache
            if (preg_match('/mysql|mariadb/i', $platform::class)) {
                $this->dbc->executeQuery(
                    'UPDATE *PREFIX*memories m
					JOIN *PREFIX*files_versions f ON m.fileid = f.file_id
					SET m.uid =JSON_UNQUOTE(JSON_EXTRACT(f.metadata, "$.author"))
					WHERE JSON_UNQUOTE(JSON_EXTRACT(f.metadata, "$.author")) IS NOT NULL',
                );
            } elseif (preg_match('/postgres/i', $platform::class)) {
                $this->dbc->executeQuery(
                    'UPDATE *PREFIX*memories AS m
                    SET uid = f.metadata->>\'author\'
                    FROM *PREFIX*files_versions AS f
                    WHERE f.fileid = m.fileid',
                );
            } elseif (preg_match('/sqlite/i', $platform::class)) {
                $this->dbc->executeQuery(
                    'UPDATE memories
                    SET uid	 = (
                        SELECT json_extract(metadata, "$.author"
						FROM files_versions
                        WHERE fileid = memories.fileid)',
                );
            } else {
                throw new \Exception('Unsupported '.$platform::class);
            }

            $output->info('Values for uid migrated successfully');
        } catch (\Exception $e) {
            $output->warning('Failed to copy uid values from fileid: '.$e->getMessage());
            $output->warning('Please run occ memories:index -f');
        }
    }
}
