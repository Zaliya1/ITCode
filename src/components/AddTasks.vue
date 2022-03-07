<template>
  <div class="task">
    <div>
      <p class="title">{{ task.title }}</p>
      <p class="description">{{ task.description }}</p>
    </div>
    <div class="buttons">
      <button class="button-remove" v-on:click="removeTask"></button>
      <button
        class="button-uncompleted"
        v-if="task.do"
        v-on:click="completeTask"
      ></button>
      <button
        class="button-completed"
        v-else
        v-on:click="completeTask"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  props: ["task"],
  methods: {
    removeTask() {
      this.$emit("removeTask");
    },
    completeTask() {
      this.$emit("completeTask");
    },
  },
};
</script>
