<template>
  <main id="app">
    <CreateTask @create-task="saveNewTask"></CreateTask>
    <ChangeTasks
      @removeAll="removeAll"
      @sortingTasks="sortingTasks"
    ></ChangeTasks>
    <input
      v-model="searchTitle"
      class="filterInput"
      placeholder="Начать поиск"
    />
    <div class="tasks">
      <AddTasks
        v-for="(task, index) in filteredTasks"
        :key="index"
        :task="task"
        @completeTask="completeTask(task)"
        @removeTask="removeTask(task)"
      ></AddTasks>
    </div>
    <div class="tasks-completed">
      <AddTasks
        v-for="(task, index) in completedTasks"
        :key="index"
        :task="task"
        @completeTask="completeTask(task)"
        @removeTask="removeTask(task)"
      ></AddTasks>
    </div>
  </main>
</template>

<script>
import AddTasks from "./components/AddTasks.vue";
import CreateTask from "./components/CreateTask.vue";
import ChangeTasks from "./components/ChangeTasks.vue";
export default {
  name: "App",
  data() {
    return {
      tasks: [],
      searchTitle: "",
    };
  },
  components: {
    AddTasks,
    CreateTask,
    ChangeTasks,
  },
  methods: {
    saveNewTask(data) {
      // создание задачи. Добавила id, потому что через index не всегда правильно удаляются задачи
      this.tasks.push({ id: this.tasks.length + 1, ...data });
    },
    completeTask(task) {
      // функция выполнения/невыполнения задачи
      const findTask = this.tasks.find((item) => item.id === task.id);
      findTask.do = !findTask.do;
    },
    removeTask(task) {
      // удаление конкретной задачи
      const findTask = this.tasks.findIndex((item) => item.id === task.id);
      this.tasks.splice(findTask, 1);
    },
    removeAll() {
      // удаление всех задач
      this.tasks = [];
    },
    sortingTasks() {
      // for (let i = 0; i < this.tasks.length; i++) {
      //   console.log(this.tasks[i].date);
      // }
      // for (let task of this.tasks)
      // let users = [
      //   { name: "John", age: 20, surname: "Johnson" },
      //   { name: "Pete", age: 18, surname: "Peterson" },
      //   { name: "Ann", age: 19, surname: "Hathaway" },
      // ];

      function byField(field) {
        return (a, b) => (a[field] < b[field] ? 1 : -1);
      }
      this.tasks.sort(byField("date"));
      console.log(this.tasks);
    },
  },
  computed: {
    completedTasks() {
      // фильтруем задачи и оставляем только сделанные
      return this.tasks.filter((task) => task.do === true);
    },
    uncompletedTasks() {
      // фильтруем задачи и оставляем только несделанные
      return this.tasks.filter((task) => task.do === false);
    },
    filteredTasks() {
      // функция поиска по title в несделанных задачах, если инпут не пустой
      if (this.searchTitle !== "") {
        let num = this.searchTitle.length;
        return this.uncompletedTasks.filter(
          (task) => task.title.substr(0, num) === this.searchTitle
        );
      } else {
        return this.uncompletedTasks;
      }
    },
  },
};
</script>

// <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: #e5e5e5;
  font-family: "Courier New";
  font-weight: 600;
}

h1,
ul,
p,
button {
  margin: 0px;
  padding: 0px;
  border: 0px;
  background-color: white;
}

.container {
  margin: 0 auto;
  width: 440px;
  background-color: white;
  padding: 10px;
}

.header {
  margin: 0 auto;
}

.heading {
  color: #3f3d56;
  font-size: 24px;
  background-image: url(assets/undraw_to_do_xvvc.svg);
  background-repeat: no-repeat;
  background-position: center;
  height: 235px;
  padding-top: 25px;
  display: flex;
  justify-content: center;
}

.week__item {
  background-image: url(assets/day.svg);
  display: flex;
  color: white;
  font-size: 14px;
  width: 48px;
  height: 51px;
  align-self: center;
  justify-content: center;
}

.week__list {
  display: flex;
  justify-content: space-between;
}

.text {
  display: flex;
  align-self: center;
}

.new-tasks {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.inputs {
  display: flex;
  flex-direction: column;
  width: 90%;
}

.save-task {
  width: 42px;
  height: 42px;
  background-color: rgba(103, 107, 194, 1);
  border: 0px;
  border-radius: 10px;
  margin-top: 10px;
  background-image: url(assets/add.svg);
  background-position: center center;
  cursor: pointer;
  background-repeat: no-repeat;
}

.input-title,
.input-description {
  height: 30px;
  width: 100%;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid rgba(103, 107, 194, 1);
  color: #3f3d56;
  padding-left: 5px;
}

.task {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task:not(:last-child) {
  margin-bottom: 10px;
}

.tasks {
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(103, 107, 194, 1);
  margin-bottom: 10px;
}

.title {
  color: #3f3d56;
  font-size: 15px;
  display: flex;
}

.description {
  color: #c4c4c4;
  font-size: 12px;
  display: flex;
}

.buttons {
  height: 22px;
  width: 12%;
  display: flex;
  justify-content: space-around;
}

.button-remove,
.button-completed,
.button-uncompleted {
  width: 45%;
  height: 100%;
  background-repeat: no-repeat;
  cursor: pointer;
}

.button-remove {
  background-image: url(assets/icon1.svg);
}

.button-completed {
  background-image: url(assets/Icon.svg);
}

.button-uncompleted {
  background-image: url(assets/icon2.svg);
}
.tasks-completed {
  opacity: 0.5;
}
.filterInput {
  color: #3f3d56;
  font-size: 14px;
  border-color: rgba(103, 107, 194, 1);
  border-radius: 5px;
  padding: 5px 10px;
}
.change-tasks {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
}
.btn-sorting,
.btn-removeAll {
  color: #3f3d56;
  font-size: 14px;
  border-color: rgba(103, 107, 194, 1);
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  border: 1px solid rgba(103, 107, 194, 1);
}
</style>
