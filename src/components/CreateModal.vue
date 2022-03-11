<template>
  <div class="modal">
    <div class="poster-film" :style="cssDefine(Number(index))"></div>
    <div class="info-film">
      <p class="name-film">{{ films[Number(index)].nameRu }}</p>
      <p class="name-film">{{ films[Number(index)].nameEn }}</p>
      <p class="name-film">
        Страна: {{ films[Number(index)].countries[0].country }}
      </p>
      <p class="name-film">{{ films[Number(index)].year }} год</p>
    </div>
    <button class="close-modal" v-on:click="closeModal"></button>
  </div>
</template>
<script>
export default {
  name: "CreateModal",
  props: {
    index: { type: String },
    films: { type: Array },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    cssDefine(index) {
      return {
        "--img": `url(${this.films[index].posterUrlPreview})`,
      };
    },
  },
};
</script>

<style>
.modal {
  background-color: rgba(128, 128, 128, 0.8);
  width: 1500px;
  height: 800px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 50px;
}
.close-modal {
  background-image: url(../assets/close.svg);
  width: 50px;
  height: 50px;
  cursor: pointer;
}

.poster-film {
  background-image: var(--img);
  width: 40%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1;
}
.info-film {
  width: 40%;
  font-size: 58px;
}
</style>

