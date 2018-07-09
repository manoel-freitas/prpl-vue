<template>
  <div id="app">
    <header>
      <router-link :to="{name: 'Home'}" tag="span">
        Poke Vue Project
      </router-link>
      <router-link :to="{name: 'pokes'}">
        Pesquise por pokemos
      </router-link>
    </header>
    <main>
      <img src="./assets/logo.png" alt="Vue.js PWA">
      <router-view></router-view>
    </main>
    <footer>
      <span>Awesome vue js App</span>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ef5350;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
 display: inline-flex;
 justify-content: space-between;
 width: 100%;
 align-items: center;
}
header a {
  text-decoration: none;
  padding: 16px;
  color: #fff;
}

header, footer {
  margin: 0;
  text-align: center;
  height: 56px;
  background-color: #ef5350;
  color: #ffffff;
}

header span {
  cursor: pointer;
}

header span, footer span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
}

.container {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
}

.c1, .c2, .c3 {
  width: 100%;
  height: 41vh;

}

@media (min-width: 600px) {
  .c1 {
    width: 60%;
    -webkit-order: 2;
    order: 2;
  }

  .c2 {
    width: 40%;
    -webkit-order: 1;
    order: 1;
  }

  .c3 {
    width: 100%;
    -webkit-order: 3;
    order: 3;
  }
}


@media (min-width: 800px) {
  .c2 {
    width: 20%;
  }

  .c3 {
    width: 20%;
  }
}

</style>
