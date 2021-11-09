<template>
  <div class="home">
    <h1>This is an home page</h1>
    <div class="searchArea">
      <h2>搜尋</h2>
      <div>
        <select v-model="city">
          <option>台北市</option>
          <option>台中市</option>
          <option>嘉義市</option>
          <option>高雄市</option>
        </select>
      </div>
      <div>
        <input type="text" v-model="name" placeholder="請輸入路線、站名"/>
      </div>
    </div>

    <div>
      <router-link to="/home/bus">Bus</router-link>
    </div>

    <div>
      <router-link to="/home/routes">Routes</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import {Vue} from 'vue-class-component';
import {Watch} from 'vue-property-decorator';

export default class Home extends Vue {
  city: string = '台北市';
  name: string = '';

  @Watch("city")
  watchCity(newVal: number, oldVal: number): void {
    console.log(newVal)
  }

  @Watch("name")
  watchName(newVal: number, oldVal: number): void {
    console.log(newVal)
  }

}
</script>

<style>
.searchArea {
  width: 25%;
  border: 2px red solid;
  border-radius: 20px;
}
</style>
