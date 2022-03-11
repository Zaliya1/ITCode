<template>
  <div class="films">
    <ul class="list">
      <li
        class="item"
        v-for="(item, index) in films"
        :key="item"
        :style="cssDefine(index)"
        v-on:click="openModal(index)"
      >
        <div class="card-film">
          <p class="name">"{{ item.nameRu }}"</p>
          <p class="rating">Рейтинг Кинопоиска {{ item.rating }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AllFilms",
  props: {
    films: { type: Array },
  },
  methods: {
    cssDefine(index) {
      return {
        "--image": `url(${this.films[index].posterUrl})`,
      };
    },
    openModal(index) {
      this.$emit("openModal", index);
    },
  },
};
</script>
<style>
.list {
  list-style-type: none;
  display: flex;
  padding: 0px;
  flex-wrap: wrap;
  justify-content: space-between;
}
.item {
  width: 17%;
  cursor: pointer;
  background-color: brown;
  margin-bottom: 55px;
  background-image: var(--image);
  height: 380px;
  background-size: 110%;
  position: relative;
  display: flex;
  justify-content: center;
  background-position: center center;
  transition: background 2s ease;
  border-radius: 10px;
}
p {
  margin: 0px;
}
.name {
  display: inline-block;
}
.item:hover {
  background-size: 120%;
}
.item:hover {
  outline-offset: 2px;
  outline: 1px solid red;
}

.card-film {
  position: absolute;
  top: -35px;
  font-size: 13px;
  display: inline-block;
  font-weight: 600;
}
</style>