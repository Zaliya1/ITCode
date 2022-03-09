<template>
  <div class="change-tasks">
    <button v-on:click="sortingTasks" class="btn-sorting">
      Сортировать по дате
    </button>
    <button v-on:click="removeAll" class="btn-removeAll">
      Удалить все задачи
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    removeAll() {
      this.$emit("removeAll");
    },
    sortingTasks() {
      this.$emit("sortingTasks");
    },
  },
};
</script>
