<template>
  <div class="home-container">
    <h1>Article</h1>
    <!--recherche-->
    <input
      v-model="searchKey"
      type="search"
      id="search"
      placeholder="Rechercher..."
      autocomplete="off"
    />
    <span v-if="searchKey && filterProducts.length >= 1"
      >{{ filterProducts.length }} result<span v-if="filterProducts.length > 1"
        >s</span
      >
    </span>
    <!--grille-->
    <div class="card-cart-container">
      <div class="card-container">
        <div
          v-for="(product, index) in filterProducts"
          :key="index"
          class="card"
        >
          <div class="img-container">
            <img v-bind:src="product.img" />
          </div>
          <div class="card-text">
            <h3>{{ product.description }}</h3>
            <span>{{ product.price }}€</span>
          </div>
          <div class="card-icons">
            <div class="like-container">
              <input
                type="checkbox"
                name="checkbox"
                v-bind:id="product.id"
                v-bind:value="product.id"
                v-model="liked"
              />
              <label v-bind:for="product.id">
                <i class="fas fa-heart"></i>
              </label>
            </div>
            <div class="add-to-cart">
              <button>
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
        <div v-if="filterProducts.length === 0" class="no-result">
          Aucun resultat trouvé
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      products: [
        {
          id: 1,
          description: "Quarz Luxe",
          price: 12,
          img: "/img/quarz-luxe.jpg",
        },
        {
          id: 2,
          description: "Curren Business",
          price: 20,
          img: "/img/curren-business.jpg",
        },
        {
          id: 3,
          description: "Curren Sport",
          price: 5,
          img: "/img/curren-sport.jpg",
        },
        {
          id: 4,
          description: "Jaragar Racing",
          price: 8,
          img: "/img/jaragar-racing.jpg",
        },
        {
          id: 5,
          description: "Liges Hommes",
          price: 3,
          img: "/img/liges-hommes.jpg",
        },
        {
          id: 6,
          description: "Maserati Mechanical",
          price: 65,
          img: "/img/maserati-mechanical.jpg",
        },
        {
          id: 7,
          description: "Montre Mecanique",
          price: 25,
          img: "/img/montre-mecanique.jpg",
        },
        {
          id: 8,
          description: "Brand Designer",
          price: 28,
          img: "/img/brand-designer.jpg",
        },
        {
          id: 9,
          description: "Relogio Masculino",
          price: 4,
          img: "/img/relogio-masculino.jpg",
        },
        {
          id: 10,
          description: "Tissot Multifunction",
          price: 29,
          img: "/img/tissot-multifunction.png",
        },
        {
          id: 11,
          description: "Hip Hop Gold",
          price: 87,
          img: "/img/hiphop-gold.jpg",
        },
        {
          id: 12,
          description: "Mesh Genova",
          price: 6,
          img: "/img/mesh-genova.jpg",
        },
        // {
        //   id: 13,
        //   description: "Mesh Genova",
        //   price: 6,
        //   img: "/img/mesh-genova.jpg",
        // },
      ],
      searchKey: "",
      liked: [],
    };
  },
  computed: {
    filterProducts() {
      return this.products.filter((product) => {
        return product.description
          .toLowerCase()
          .includes(this.searchKey.toLowerCase());
      });
    },
  },
};
</script>

<style scoped></style>
