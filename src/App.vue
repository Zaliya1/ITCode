<template>
  <main id="app">
    <div class="container">
      <h1 class="h1">Топ-20 лучших фильмов по рейтингу Кинопоиска</h1>
      <button class="sort-rating" v-on:click="sortRating">
        Сортировать по рейтингу
      </button>
      <input
        type="text"
        class="input-search"
        placeholder="Поиск"
        v-model="searchFilms"
        v-on:input="searchFilm"
      />
      <AllFilms
        :films="arrayFilms"
        @openModal="openModal"
        v-if="arrayUpdateFilms.length === 0"
      ></AllFilms>
      <AllFilms
        :films="arrayUpdateFilms"
        @openModal="openModal"
        v-if="arrayUpdateFilms.length > 0"
      ></AllFilms>
      <CreateModal
        v-if="isModal"
        :index="indexModal"
        :films="arrayFilms"
        @closeModal="closeModal"
      ></CreateModal>
    </div>
  </main>
</template>

<script>
import CreateModal from "./components/CreateModal";
import AllFilms from "./components/AllFilms";
export default {
  name: "App",
  data() {
    return {
      arrayFilms: [],
      indexModal: "",
      isModal: false,
      searchFilms: "",
      arrayUpdateFilms: [],
    };
  },
  components: {
    CreateModal,
    AllFilms,
  },
  beforeMount() {
    this.createArr();
  },
  methods: {
    async createArr() {
      let obj = await fetch(
        "https://kinopoiskapiunofficial.tech/api/v2.2/films/top",
        {
          method: "GET",
          headers: {
            "X-API-KEY": "63370443-a34d-4400-bd01-688bd93b9929",
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .catch((err) => console.log(err));
      this.arrayFilms = obj.films;
    },
    openModal(index) {
      this.isModal = true;
      this.indexModal = index;
    },
    closeModal() {
      this.isModal = false;
    },
    bySort(field) {
      return (a, b) => (a[field] > b[field] ? 1 : -1);
    },
    sortRating() {
      this.arrayFilms.sort(this.bySort("rating"));
    },
    searchFilm() {
      if (this.searchFilms !== {}) {
        let num = this.searchFilms.length;
        this.arrayUpdateFilms = this.arrayFilms.filter(
          (film) =>
            film.nameRu.substr(0, num).toLowerCase() ==
            this.searchFilms.toLowerCase()
        );
      } else {
        return this.arrayUpdateFilms;
      }
    },
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  max-width: 1500px;
}
.h1 {
  margin-bottom: 20px;
}
.sort-rating {
  margin-bottom: 30px;
  display: inline-block;
  margin-right: 30px;
  font-size: 20px;
  border-radius: 10px;
}
.input-search {
  display: inline-block;
  border-radius: 10px;
  font-size: 20px;
}
</style>
