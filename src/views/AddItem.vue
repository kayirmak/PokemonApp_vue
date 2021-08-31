<template>
  <div>
    <form
      class="add-item"
      @submit.prevent="onSubmit"
    >
      <input
        class="input-item"
        type="text"
        placeholder="name"
        v-model="name"
      />
      <input
        class="input-item"
        type="text"
        placeholder="description"
        v-model="description"
      />
      <input
        class="input-item"
        type="text"
        placeholder="image Url"
        v-model="image"
      />
      <input
        class="input-item"
        type="number"
        placeholder="weight (kg)"
        v-model="weight"
      />
      <input
        class="input-item"
        type="number"
        placeholder="height (cm)"
        v-model="height"
      />
      <button
        class="submit-item fas fa-plus-circle"
        :disabled="isSubmitting"
      ></button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PavAddItem',
  data () {
    return {
      name: '',
      description: '',
      image: '',
      weight: '',
      height: ''
    }
  },
  computed: {
    isSubmitting () {
      return this.$store.state.feed.isSubmitting
    }
  },
  methods: {
    onSubmit () {
      if (this.name === '' || this.description === '' || this.image === '' || this.weight === '' || this.height === '') {
        alert('All fields are not filled')
      } else {
        this.$store.dispatch('addItem', {
          name: this.name,
          description: this.description,
          image: this.image,
          weight: this.weight,
          height: this.height,
          isLike: false
        })
          .then(() => {
            this.name = ''
            this.description = ''
            this.image = ''
            this.weight = ''
            this.height = ''
          })
      }
    }
  }
}
</script>

<style>
input {
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 5px 5px;
}
button {
  border-radius: 2px;
  border: none;
  cursor: pointer;
  background-color: rgb(0, 236, 102);
}
.submit-item:hover {
  background-color: rgb(0, 168, 73);
}
.add-item {
  padding: 10px 5px;
  border: 1px solid #ddd;
  max-width: 370px;
  box-shadow: 1px 5px 6px 0 rgb(155, 155, 155);
}
.submit-item {
    padding: 6px 25px;
}
.input-item {
  margin-top: 5px;
}
</style>
