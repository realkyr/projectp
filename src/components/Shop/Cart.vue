<template>
  <!-- Wrapper -->
  <div class="wrapper">
    <!-- Sidebar -->
    <nav :class="{sidebar: true, active}">

      <!-- cart title -->
      <div class="cart-title">
        <h3>
          View basket
        </h3>
      </div>

      <div class="cart-list container-fluid">
        <div :key="name" v-for="(val, name) in cartItems" class="cart-item row align-items-center">
          <div class="col-5">
            <img :src="val.image" style="max-width: 150px">
          </div>
          <div class="item-details col-7">
            <h5>Fruity Bloom {{ val.product }}</h5>
            <h6 v-if="val.striped">{{ '{ ' + val.striped + ' }' }}</h6>
            <input type="number" class="amount" v-model="cartItems[name].amount" :name="name + '-amout'" :id="name + '-amout'">
            <h4>{{ val.price * val.amount }} B </h4>
          </div>
        </div>
      </div>

      <div class="cart-footer">
        <div class="total">
          <h5>Total</h5>
          <h5>{{ total }} B</h5>
        </div>
        <div class="order-container"><button>Order Now</button></div>
      </div>
    </nav>
    <!-- End sidebar -->

    <!-- Dark overlay -->
    <div @click="active = false" :class="{overlay: true, active}"></div>
  </div>
  <!-- End wrapper -->
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      active: false
    }
  },
  computed: {
    cartItems () {
      return this.$store.state.cartItems
    },
    ...mapGetters(['total'])
  }
}
</script>

<style scoped>
/***** Wrapper *****/

.wrapper {
  display: block;
}

/***** Sidebar *****/

.sidebar {
  max-width: 420px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: -436px;
  z-index: 999;
  background: #E2E5E8;
  color: #fff;
  transition: all .3s;
  box-shadow: 3px 3px 3px rgba(51, 51, 51, 0.5);
  text-align: center;
  display: flex;
  flex-direction: column;
}

.sidebar.active {
  right: 0;
}

.container-fluid {
  padding: 0
}

.cart-list {
  flex-grow: 1;
  overflow-y: scroll;
  width: 420px;
}

::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
}
::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0,0,0,.5);
    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
    box-shadow: 0 0 1px rgba(255,255,255,.5);
}

.cart-list h4,
.cart-list h5,
.cart-list h6 {
  font-family: 'YoungSerif';
}

.cart-list h5 {
  font-size: 1em;
}

.cart-footer {
  background: white;
  display: flex;
  flex-direction: column;
}

.cart-footer .total {
  background: #CACCCE;
  height: 50px;
  color: #3994D1;
  padding: 20px 20px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-footer .total h5 {
  display: inline-flex;
  margin: 0;
}

.cart-footer .order-container {
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
}

.cart-footer .order-container button {
  padding: 20px 70px;
  background: #3994D1;
  border: 0;
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  color: white;
}

/***** Content *****/
.content {
    width: 100%;
    transition: all 0.3s;
}

/*** cart title ***/
.cart-title {
  padding: 20px 10px;
  background: #3994D1;
}

.cart-item {
  text-align: left;
  background: white;
  color: #3994D1;
  margin: 10px 0;
  padding: 20px 16px;
}

h1, h2, h3,
h4, h5, h6 {
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
}

input.amount {
  border-radius: 18px;
  -webkit-appearance: none;
  outline: none;
  color: none !important;
  border: 1px solid #3994D1;
  padding: 2px 10px;
}

/***** Dark overlay *****/

.overlay {
    display: none;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(51, 51, 51, 0.7);
    z-index: 998;
    opacity: 0;
    transition: all .5s ease-in-out;
}

.overlay.active {
    display: block;
    opacity: 1;
}
</style>
