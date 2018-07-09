<template>
<div class="container">
  <div class="c1">
    <label for=''>
      Busque por seu pokemon aqui
      <input type="text" class="input"  v-model="pokemon" @keyup.enter="buscaPokemon">
    </label>
    <p v-show="errorMessage"> {{errorMessage}}</p>

  </div>
  <div class="c2">
<p>publicidade!</p>
  </div>
  <div class="c3">
    <p>publicidade!</p>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      pokemon: '',
      errorMessage: ''
    }
  },
  methods: {
    buscaPokemon () {
      this.$router.push({
        name: 'poke_desc',
        query: { search: this.pokemon },
        params: {pokemonName: this.pokemon}
      })
      this.pokemon = ''
    }
  }
}
</script>

<style>
input {
  width: 100%;
}
</style>
