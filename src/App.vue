<template>
  <div id="parent">
    <div id="menu">
      <div class="i_logo"></div>
      <div>
        <router-link to="/">Home</router-link>
      </div>

      <div>
        <router-link to="/about">About</router-link>
      </div>

    </div>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  width: 100%;
  height: 100VH;
  padding: 40px 24px;
}

#parent {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}

#menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 20%;
  max-width: 100px;
  background-color: gray;
  padding: 36px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

div#menu > div {
  width: 100px;
  height: 100px;
  margin-bottom: 36px;
  text-align: center;
}

#content {
  width: 80%;
}

.i_logo {
  position: absolute;
  top: 78px;
  width: 100px;
  height: 100px;
  background-size: 100px;
  background-image: url(/img/logo.82b9c7a5.png);
  background-repeat: no-repeat;
}
</style>
