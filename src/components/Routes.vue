<template>
  <div>
    <h1>Routes is here.</h1>
    {{ city }}---{{ name }}
    <button @click="show">show</button>
  </div>
</template>

<script>
import {Vue} from "vue-class-component";
import {Prop} from "vue-property-decorator";

export default class Routes extends Vue {
  city = '';
  name = '';

  mounted() {
    this.city = this.$route.params.city;
    this.name = this.$route.params.name;
  }
}
</script>

<style scoped>

</style>
