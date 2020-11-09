<template>
  <li v-for="(item, index) in listItemsProp" v-bind:key="item">
    <label>
      <input type="checkbox" @click="item.done = !item.done" />
    </label>
    <span v-bind:class="{ lineThrough: item.done }">{{ item.value }}</span>
    <button @click="$emit('delete', index)">dle</button>
  </li>
</template>

<script>
export default {
  name: "ListItems",
  props: ["listItemsProp"]
};
</script>

<style lang="sass" scoped>

button
  margin-left: 10px

li
  opacity: 0.8
  border-radius: 7px
  color: white
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2)
  margin: 5px 20px
  background-color: black
  height: 45px
  display: flex
  align-items: center
  & > button
    margin: 0 0 0 auto
  .lineThrough
    text-decoration: line-through
</style>
