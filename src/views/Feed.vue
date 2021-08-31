<template>
  <div>
    <div v-if="feed">
      <pav-card
        :data="feed"
        @onTrash="onTrash"
        @onChangeFavorite="onChangeFavorite"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PavCard from '@/components/Card'

export default {
  name: 'PavFeed',
  components: {
    PavCard
  },
  methods: {
    onChangeFavorite (id) {
      this.$store.dispatch('changeFavoriteStatus', id)
    },
    onTrash (id) {
      this.$store.dispatch('deleteItem', id)
      console.log(id)
    }
  },
  computed: {
    ...mapState({
      feed: state => state.feed.data
    })
  }
}
</script>
