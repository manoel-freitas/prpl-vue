<template>
  <div class="container" v-if="!errorMessage">
    <div class="c1">
      <p>{{pokemon.name}}</p>
    </div>
    <div class="c2">
      <div class="sprites">
        <img :src="sprites.front_default || '' " alt="">
      </div>
    </div>
  </div>
  <p v-else>{{errorMessage}}</p>
</template>

<script>
export default {
  computed: {
    sprites () {
      return this.pokemon.sprites
    },
    pokemonSearched () {
      return this.pokemonName ? this.pokemonName : this.$route.query.search
    }
  },
  data () {
    return {
      pokemon: {
        name: '',
        sprites: {
          front_default: ''
        }
      },
      errorMessage: ''
    }
  },
  mounted () {
    this.$http
      .get(`pokemon/${this.pokemonSearched}`)
      .then(result => {
        return result.data
      })
      .then(pokemon => {
        this.pokemon = pokemon
      })
      .catch(() => {
        this.errorMessage = `Nenhum pokemon com o nome ${this.pokemonSearched} encontrado!`
      })
  },
  props: {
    pokemonName: {
      type: String
    }
  }
}
</script>

<style scoped>
p {
  height: 36vh
}
</style>
