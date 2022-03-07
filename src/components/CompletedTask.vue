<template>
  <div class="tasks-completed">
    <div>
      <p class="title">{{ task.title }}</p>
      <p class="description">{{ task.description }}</p>
    </div>
    <div class="buttons">
      <button class="button-remove" v-on:click="removeTask"></button>
      <button class="button-uncompleted" v-on:click="uncompleteTask"></button>
    </div>
  </div>
</template>
<script>
export default {
  name: "CompletedTask",
  props: ["task"],
  methods: {
    removeTask() {
      this.$emit("removeTask");
    },
    uncompleteTask() {
      this.$emit("uncompleteTask");
    },
  },
};
</script>
