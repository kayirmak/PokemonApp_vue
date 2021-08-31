<template>
  <div>
    <div class="main-pokemons">
      <div class="card-pokemon" v-for="(pokemon, index) in data" :key="index">
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
        <div class="move-pokemon">
          <button class="add-favorite fa fa-heart" v-bind:class="{active: pokemon.isLike}" @click="onChangeFavorite(pokemon.id)"></button>
          <button class="trash-pokemon fa fa-trash" @click="onTrash(pokemon.id)"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PavCard',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  methods: {
    onChangeFavorite (id) {
      this.$emit(
        'onChangeFavorite',
        id
      )
    },
    onTrash (id) {
      this.$emit(
        'onTrash',
        id
      )
    }
  }
}
</script>

<style>
body {
  font-family: 'Titillium Web', sans-serif;;
}
.main-pokemons {
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
.about-pokemon, .move-pokemon {
  width: 250px;
  margin: 0 auto;
}
.move-pokemon {
  margin-top: 20px;
}
.characteristic {
  display: flex;
  justify-content: space-between;
}
.add-favorite, .trash-pokemon {
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 22px;
  transition: all 0.2s ease-in-out;
}
.add-favorite:active {
  transform: scale(1.2);
}
.trash-pokemon:active {
  transform: scale(1.2);
  transition: all 0.2s ease-in-out;
}
.active {
  color: red;
}
</style>
