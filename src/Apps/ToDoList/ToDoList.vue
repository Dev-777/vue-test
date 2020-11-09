<template>
  <div class="parent">
    <div class="inputField">
      <label>
        <input type="text" v-model="inputCurrentValue" @keydown.enter="add" />
      </label>
      <button type="button" @click="add">add</button>
    </div>
    <hr />
    <div class="listContainer">
      <h1 v-if="listItems.length === 0">No ToDos</h1>
      <ul v-else>
        <ListItems @delete="del" v-bind:listItemsProp="listItems" />
      </ul>
    </div>
  </div>
</template>

<script>
import "reset-css";
import ListItems from "@/Apps/ToDoList/ListItems";

export default {
  name: "ToDoList",
  components: {
    ListItems
  },

  data() {
    return {
      listItems: [],
      inputCurrentValue: "",
      completed: ""
    };
  },
  methods: {
    add() {
      if (!this.inputCurrentValue.replace(/[ ]/g, "")) {
        this.inputCurrentValue = "";
      } else {
        this.listItems.push({ value: this.inputCurrentValue, done: false });
        this.inputCurrentValue = "";
      }
    },
    del(index) {
      this.listItems.splice(index, 1);
    }
  }
};
</script>

<style lang="sass" scoped>

.parent
  background: url("../../assets/snow.jpg")
  background-size: cover
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  height: 100vh
  .inputField
    margin: 20px 0 0 0
  .listContainer
    width: 600px
    min-height: 200px
    max-height: 400px
    overflow: auto
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2)

    & h1:first-child
      text-align: center
  button
    margin-left: 10px
  hr
    width: 600px
    border: 2px solid black
</style>
