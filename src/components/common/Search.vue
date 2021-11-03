<template>
  <div class="searchArea">
    <h2>搜尋</h2>
    <div>
      <select>
        <option>台北市</option>
      </select>
    </div>
    <div>
      <input type="text" placeholder="請輸入路線、站名"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search"
}
</script>

<style scoped>
.searchArea {
  width: 25%;
  border: 2px red solid;
  border-radius: 20px;
}
</style>
