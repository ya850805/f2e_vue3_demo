<template>
  <div>
    <h1>Bus is here.</h1>
    <ul>
      <li>Bus1<button @click="searchRoute('台北市', '10')">Go台北市-10</button></li>
      <li>Bus2<button @click="searchRoute('台中市', '20')">Go台中市-20</button></li>
      <li>Bus3<button @click="searchRoute('高雄市', '30')">Go高雄市-30</button></li>
    </ul>
  </div>
</template>

<script>
import {Vue} from "vue-class-component";

export default class Bus extends Vue{
  searchRoute(city, name) {
    // this.$router.replace('/home/routes', {city, name});
    this.$router.replace(`/home/routes/${city}/${name}`);
  }

}
</script>

<style scoped>

</style>
