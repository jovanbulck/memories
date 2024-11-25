<template>
  <NcButton
    class="memories-menu-item filter-menu"
    :title="t('memories', 'Filter timeline')"
    :aria-label="t('memories', 'Filter timeline')"
    type="tertiary-no-background"
  >
    <NcActions :forceMenu="true">
        <template #icon>
          <FilterMenuIcon :size="20" />
				</template>

        <!-- Collaborator selection -->
        <template v-if="uids.length > 1">
				  <NcActionButton :disabled="true">
				  	<template #icon>
				  		<AccountMultipleIcon :size="18" />
				  	</template>
				  	{{ t('memories', 'Collaborators') }}
				  </NcActionButton>

          <NcActionCheckbox
              v-for="(uid, idx) in uids"
              :key="uid"
              :checked="checkedUids[idx]"
              @update:checked="(value) => updateUid(uid, idx, value)"
              class="filter-choice"
          >
            {{ displayNames.get(uid)?? uid }}
          </NcActionCheckbox>
          <NcActionSeparator/>
        </template>

        <!-- Media selection submenu -->
        <NcActionButton :disabled="true">
					<template #icon>
						<ImageMultipleIcon :size="18" />
					</template>
					{{ t('memories', 'Media types') }}
				</NcActionButton>

        <NcActionCheckbox
            v-for="(media, idx) in media"
            :key="media"
            :checked="checkedMedia[idx]"
            @update:checked="(value) => updateMedia(media, idx, value)"
            class="filter-choice"
        >
          {{ displayMediaType(media) }}
        </NcActionCheckbox>
        <NcActionSeparator/>

        <!-- Tag selection submenu -->
        <NcActionButton :disabled="true">
					<template #icon>
						<StarIcon :size="18" />
					</template>
					{{ t('memories', 'Tags') }}
				</NcActionButton>

        <NcActionCheckbox
            :checked="favoriteChecked"
            @update:checked="(value) => updateFavorites(value)"
            class="filter-choice"
        >
				  {{ t('memories', 'Favorites') }}
        </NcActionCheckbox>
    </NcActions>
  </NcButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { type FilterMediaType, FilterMediaTypes } from '@services/API';

import NcButton from '@nextcloud/vue/dist/Components/NcButton.js';
import FilterMenuIcon from 'vue-material-design-icons/FilterMenu.vue';
import AccountMultipleIcon from 'vue-material-design-icons/AccountMultiple.vue';
import ImageMultipleIcon from 'vue-material-design-icons/ImageMultiple.vue';
import StarIcon from 'vue-material-design-icons/Star.vue';

import NcActions from '@nextcloud/vue/dist/Components/NcActions.js'
import NcActionCheckbox from '@nextcloud/vue/dist/Components/NcActionCheckbox.js'
import NcActionSeparator from '@nextcloud/vue/dist/Components/NcActionSeparator.js';
import NcActionCaption from '@nextcloud/vue/dist/Components/NcActionCaption.js'
import NcActionButton from '@nextcloud/vue/dist/Components/NcActionButton.js'

import * as utils from '@services/utils';

export default defineComponent({
  name: 'FilterMenuItem',
  components: {
    NcButton,
    NcActions,
    NcActionCheckbox,
    NcActionSeparator,
    NcActionCaption,
    NcActionButton,
    FilterMenuIcon,
    AccountMultipleIcon,
    ImageMultipleIcon,
    StarIcon,
  },

  data: () => ({
    /** Set of unique usernames in current timeline view */
    uids: [] as string[],
    checkedUids: [] as boolean[],
    /** Display names corresponding to the uid set */
    displayNames: new Map(),
    /** Array of known media filter types */
    media: Object.keys(FilterMediaTypes) as FilterMediaType[],
    checkedMedia: [] as boolean[],
    /** Whether or not to restrict the current timeline view to favorites only */
    favoriteChecked: false,
  }),

  created() {
    this.reset();
    utils.bus.on('memories:timeline:uid', this.refresh);
    utils.bus.on('memories:timeline:create', this.reset);
  },

  beforeDestroy() {
    utils.bus.off('memories:timeline:uid', this.refresh);
    utils.bus.off('memories:timeline:create', this.reset);
  },

  methods: {
    reset() {
      this.uids = [utils.uid] as string[];
      this.checkedUids = [true];
      this.displayNames = new Map([[utils.uid, this.t('memories', 'Me')]]);
      this.checkedMedia = this.media.map(() => true);
      this.favoriteChecked = false;
    },

    displayMediaType(media: FilterMediaType) {
      return FilterMediaTypes[media];
    },

    async refresh(uid: string) {
      if (this.uids.includes(uid))
        return;
      
      const name = await utils.getUserDisplayName(uid);
      this.displayNames.set(uid, name);
      this.uids.push(uid);
      this.checkedUids.push(true);
    },

    updateUid(uid: string, idx: number, selected: boolean) {
      this.$set(this.checkedUids, idx, selected);
      utils.bus.emit('memories:filter:uid', {uid: uid, filter: !selected});
    },

    updateMedia(media: FilterMediaType, idx: number, selected: boolean) {
      this.$set(this.checkedMedia, idx, selected);
      utils.bus.emit('memories:filter:media', {media: media, filter: !selected});
    },

    updateFavorites(selected: boolean) {
      this.favoriteChecked = selected;
      utils.bus.emit('memories:filter:favorites', selected);
    },
  },
});
</script>

<style lang="scss" scoped>
.filter-choice {
  margin-left: 20px;
}
</style>