<template>
  <div id="app">
    <pav-add-item />
    <router-link class="feed-link" :to="{name: 'Feed'}">Home</router-link>
    <router-link class="favoriteList-link" :to="{name: 'FavoriteList'}">FavoriteList</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import PavFeed from '@/views/Feed'
import PavAddItem from '@/views/AddItem'

export default {
  name: 'App',
  components: {
    PavFeed,
    PavAddItem
  },
  mounted () {
    this.$store.dispatch('getFeed')
  }
}
</script>

<style>
a {
  color: #000;
  font-size: 24px;
  text-decoration: none;
}
.feed-link {
  margin-right: 20px;
}
</style>
