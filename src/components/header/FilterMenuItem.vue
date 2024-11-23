<template>
  <NcButton
    class="memories-menu-item filter-menu"
    :title="t('memories', 'Filter timeline')"
    :aria-label="t('memories', 'Filter timeline')"
  >
    <NcActions>
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
              v-for="uid in uids"
              :key="uid"
              :checked="true"
              @update:checked="(value) => updateUid(uid, value)"
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
            v-for="media in media"
            :key="media"
            :checked="true"
            @update:checked="(value) => updateMedia(media, value)"
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
            :v-model="favoriteChecked"
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
    /** Display names corresponding to the uid set */
    displayNames: new Map(),
    /** Array of known media filter types */
    media: [] as FilterMediaType[],
    /** Whether or not to restrict the current timeline view to favorites only */
    favoriteChecked: false,
  }),

  created() {
    this.init();
    utils.bus.on('memories:timeline:uid', this.refresh);
    utils.bus.on('memories:timeline:create', this.init);
  },

  beforeDestroy() {
    utils.bus.off('memories:timeline:uid', this.refresh);
    utils.bus.off('memories:timeline:create', this.init);
  },

  methods: {
    init() {
      this.uids = [utils.uid] as string[];
      this.displayNames = new Map([[utils.uid, this.t('memories', 'Me')]]);
      this.media = Object.keys(FilterMediaTypes) as FilterMediaType[];
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
    },

    updateUid(uid: string, selected: boolean) {
      utils.bus.emit('memories:filter:uid', {uid: uid, filter: !selected});
    },

    updateMedia(media: FilterMediaType, selected: boolean) {
      utils.bus.emit('memories:filter:media', {media: media, filter: !selected});
    },

    updateFavorites(selected: boolean) {
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