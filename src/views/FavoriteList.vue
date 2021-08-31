<template>
  <div>
    <div class="main-favorite">
      <div class="card-pokemon" v-for="(pokemon, index) in favoriteList" :key="index">
        <img class="image-pokemon" :src="pokemon.image" alt="" />
        <div class="about-pokemon">
          <h2>{{pokemon.name}}</h2>
          <p>{{pokemon.description}}</p>
          <hr />
          <div class="characteristic">
            <span>weight: <strong>{{pokemon.weight}}kg</strong></span>
            <span>height: <strong>{{pokemon.height}}cm</strong></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PavFavoriteList',
  data () {
    return {
      favoriteData: []
    }
  },
  computed: {
    favoriteList () {
      return this.favoriteData
    }
  },
  mounted () {
    this.$store.dispatch('getFeed')
      .then(res => {
        this.favoriteData = res.filter(el => el.isLike === true)
      })
  }
}
</script>

<style>
body {
  font-family: 'Titillium Web', sans-serif;;
}
.main-favorite {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
}
.card-pokemon {
  width: 300px;
  min-height: 400px;
  border: 1px solid #ddd;
  border-radius: 1%;
  padding: 10px 5px;
  margin: 15px auto 0;
  box-shadow: 1px 1px 6px 0 rgb(194, 194, 194);
  display: flex;
  flex-direction: column;
}
.image-pokemon {
  max-width: 200px;
  display: flex;
  align-self: center;
}
.about-pokemon {
  width: 250px;
  margin: 0 auto;
}
.characteristic {
  display: flex;
  justify-content: space-between;
}
.active {
  color: red;
}
</style>
