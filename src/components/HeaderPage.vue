<template>
  <div class="hello">
    <nav>
      <div class="nav-container">
        <div id="logo">
          <router-link to="/">
            <img src="../assets/img/wish-logo-800.png" alt="logo"
          /></router-link>
        </div>
        <ul id="icons">
          <li>
            <router-link to="user-setting">
              <i class="fas fa-user"></i>
            </router-link>
          </li>
          <li>
            <router-link to="wish-list">
              <i class="fas fa-heart"></i>
              <span id="nav-notif"></span>
            </router-link>
          </li>
          <li>
            <router-link to="shopping-cart">
              <i class="fas fa-shopping-cart"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderPage",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
