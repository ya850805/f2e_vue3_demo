<template>
  <div class="home">
    <h1>This is an home page</h1>
    <Search></Search>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Search from "@/components/common/Search.vue";

@Options({
  components: {
    Search
  },
})
export default class Home extends Vue {}
</script>
