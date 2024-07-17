<template>
  <div class="dtm-container" v-if="currentmatter || viewName">
    <div v-if="viewName" class="header">{{ viewName }}</div>

    <div v-if="viewsubTitle" class="subtitle">
      <MapMarkerOutlineIcon class="icon"></MapMarkerOutlineIcon>
      <span>{{ viewsubTitle }}</span>
    </div>

    <div class="avatars">
      <NcAvatar
        v-for="c of collaborators"
        :key="c"
        :user="c"
        :displayName="c"
        :showUserStatus="false"
        :disableMenu="false"
      />
    </div>

    <component ref="child" v-if="currentmatter" :is="currentmatter" @load="$emit('load')" />
  </div>
</template>

<script lang="ts">
import { defineComponent, type Component } from 'vue';

import UserMixin from '@mixins/UserConfig';

import FolderDynamicTopMatter from './FolderDynamicTopMatter.vue';
import PlacesDynamicTopMatterVue from './PlacesDynamicTopMatter.vue';
import OnThisDay from './OnThisDay.vue';
import MapMarkerOutlineIcon from 'vue-material-design-icons/MapMarkerOutline.vue';

const NcAvatar = () => import('@nextcloud/vue/dist/Components/NcAvatar.js');

type Collaborator = {
  id: string;
  label: string;
};

import * as strings from '@services/strings';

import * as dav from '@services/dav';

// Auto-hide top header on public shares if redundant
import './PublicShareHeader';

export default defineComponent({
  name: 'DynamicTopMatter',

  components: {
    MapMarkerOutlineIcon,
    NcAvatar,
  },

  mixins: [UserMixin],

  emits: {
    load: () => true,
  },

  data: () => ({
    album: null as any,
  }),

  computed: {
    refs() {
      return this.$refs as {
        child?: { refresh?(): Promise<boolean> };
      };
    },

    collaborators(): string[] {
      if (this.album) {
        return [this.$route.params.user, ...this.album.collaborators.map((c: Collaborator) => c.id)];
      }
      return [];
    },

    currentmatter(): Component | null {
      if (this.routeIsFolders || (this.routeIsFolderShare && this.initstate.shareType === 'folder')) {
        return FolderDynamicTopMatter;
      } else if (this.routeIsPlaces) {
        return PlacesDynamicTopMatterVue;
      } else if (this.routeIsBase && this.config.enable_top_memories) {
        return OnThisDay;
      }

      return null;
    },

    /** Get view name for dynamic top matter */
    viewName(): string {
      // Show album name for album view
      if (this.routeIsAlbums) {
        return strings.albumDisplayName(this.$route.params.name ?? String());
      }

      // Show share name for public shares, except for folder share,
      // because the name is already present in the breadcrumbs
      if (this.routeIsPublic && !this.routeIsFolderShare) {
        return this.initstate.shareTitle;
      }

      // Only static top matter for these routes
      if (this.routeIsTags || this.routeIsPeople || this.routeIsPlaces) {
        return String();
      }

      return strings.viewName(this.$route.name!);
    },

    /** Get view subtitle for dynamic top matter */
    viewsubTitle(): string {
      if (this.album) {
        return this.album.location ?? String();
      }
      return String();
    },
  },

  methods: {
    async refresh(): Promise<boolean> {
      if (this.routeIsAlbums) {
        try {
          this.album = await dav.getAlbum(this.$route.params.user, this.$route.params.name);
        } catch (e) {
          this.album = null;
        }
      }
      
      if (this.currentmatter) {
        await this.$nextTick();
        return (await this.refs.child?.refresh?.()) ?? false;
      }

      return false;
    },
  },
});
</script>

<style lang="scss" scoped>
.dtm-container {
  > .header {
    font-size: 2.5em;
    position: relative;
    display: block;
    line-height: 1.2em;

    // more padding on right for scroller thumb
    padding: 25px 60px 10px 10px;

    @media (max-width: 768px) {
      font-size: 1.8em;
      padding: 15px 30px 7px 12px;
      html.native & {
        // header is empty, more top padding
        padding: 25px 30px 7px 18px;
      }
    }
  }

  > .subtitle {
    font-size: 1.1em;
    line-height: 1.2em;
    margin-top: 0.5em;
    color: var(--color-text-lighter);
    display: flex;
    padding-left: 10px;
  }

  .icon {
    margin-right: 5px;
  }

  > .avatars {
    line-height: 1.2em;
    margin-top: 0.5em;
    padding-left: 10px;
  }
}
</style>
