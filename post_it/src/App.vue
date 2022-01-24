<!--第一页显示的，没必要动-->
<template>
  <div>
    <router-view />
  </div>
</template>


<!--整体布局在App.vue里-->
<style>
body {
  background: url("~@/assets/back.jpg");
  background-repeat: round;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
