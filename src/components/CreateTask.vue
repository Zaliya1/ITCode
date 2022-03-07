<template>
  <div>
    <div class="week">
      <ul class="week__list">
        <li class="week__item"><span class="text">ПН</span></li>
        <li class="week__item"><span class="text">ВТ</span></li>
        <li class="week__item"><span class="text">СР</span></li>
        <li class="week__item"><span class="text">ЧТ</span></li>
        <li class="week__item"><span class="text">ПТ</span></li>
        <li class="week__item"><span class="text">СБ</span></li>
        <li class="week__item"><span class="text">ВС</span></li>
      </ul>
    </div>
    <div class="new-tasks">
      <div class="inputs">
        <input class="input-title" type="text" placeholder="Название дела" />
        <input class="input-description" type="text" placeholder="Время" />
      </div>
      <button class="save-task" v-on:click="createTask()"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateTask",
  methods: {
    createTask() {
      let inputTitle = document.querySelector(".input-title");
      let inputDescription = document.querySelector(".input-description");
      this.$emit("create-task", {
        title: inputTitle.value,
        description: inputDescription.value,
        do: false,
        date: Date.now(),
      });
      inputTitle.value = "";
      inputDescription.value = "";
    },
  },
};
</script>