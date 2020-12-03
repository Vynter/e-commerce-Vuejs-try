import Home from "./components/Home.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import UserSetting from "./components/UserSetting.vue";
import WishList from "./components/WishList.vue";

export default [
  { path: "/", component: Home },
  { path: "/shopping-cart", component: ShoppingCart },
  { path: "/user-setting", component: UserSetting },
  { path: "/wish-list", component: WishList },
];
