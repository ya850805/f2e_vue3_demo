<template>
  <div id="parent" :style="{fontSize: fontSize + 'em'}">
    <div id="menu">
      <div class="i_logo"></div>
      <div>
        <router-link to="/home">Home</router-link>
      </div>

      <div>
        <router-link to="/about">About</router-link>
      </div>

    </div>
    <div id="content">
      <b>font-size:</b>
      <select v-model="fontSize">
        <option value="1">小</option>
        <option value="2">中</option>
        <option value="3">大</option>
      </select>
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">

import {Vue} from "vue-class-component";

export default class App extends Vue {
  fontSize: number = 1;
}
</script>

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
  /*background-image: url(/img/logo.82b9c7a5.png);*/
  background-repeat: no-repeat;
}
</style>
