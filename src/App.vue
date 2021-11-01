<template>
  <div id="parent">
    <div id="menu">
      LOGO<br>
      <router-link to="/">Home</router-link><br>
      <router-link to="/about">About</router-link>
    </div>
    <div id="router">
      <router-view/>
    </div>
  </div>
</template>

<style>
#app{
  height: 1980px;
}

#parent{
  display: flex;
}

#menu{
  flex: 1;
  width: 20%;
  background: grey;
}

#router{
  width: 80%;
}
</style>
