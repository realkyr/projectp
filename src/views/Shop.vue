<template>
  <div>
    <div class="container-fluid">
      <div class="nav row">
        <img :src="require('@/assets/img/Shop/BG-01.png')" />
        <div class="col-6">
          <!-- <img src="drive\ABOUTPAGE\icon\blue_home.png" width="10%" class="rounded float-left"> -->
          Home
        </div>
        <div class="col-6">
          <button class="rounded float-right">
            Login
          </button>
          <button class="rounded float-right">
            cart
          </button>
          <!-- <img src="drive\SHOPPAGE\reuse\icon\basket-point.png" width="10%" class="rounded float-right">
          <img src="drive\SHOPPAGE\reuse\icon\login-point.png" width="10%" class="rounded float-right"> -->
        </div>
      </div>

      <div class="row" id="first">
        <div class="col-12 col-md-6">
          <div class="d-flex justify-content-center">
            <img :src="require('@/assets/img/Shop/calendar.png')" width="80%">
          </div>
        </div>

        <div class="col-12 col-md-5 col-xl-4">
          <div style="height: 100%" class="d-flex flex-column justify-content-center calendar-info">
            <h3>Fruity Bloom Calendar 2020</h3>
            <p class="text-justify">
              Body Shaming is a story that exists in every phase
              of our lives. Which may cause many people to lack
              confidence, which this calendar will help you Love
              your body more and and be proud of who you are.
            </p>
            <br>
            <p>
              calendar size- 16 x 24 cm.<br>
              120 paper
            </p>
            <br>
            <h3 class="text-center">120 ฿</h3>
            <br>
            <div class="d-flex justify-content-center">
              <button>Shop</button>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center" id="second">
        <div class="col-12 col-md-9 col-lg-8 col-xl-7" >
          <div class="text-center">
            <h3>Our brand</h3>
            <p>mainly focus on design, character edge Because each one is designed from being body shaming,
            so we want our products to end has a character in it to help boost your confidence in you.</p>
          </div>
        </div>
      </div>

      <div class="product-img">
        <div class="row">
          <div class="product-outer col-12 col-md-4">
            <div class="product">
              <img :src="require('@/assets/img/About/mochipeach.jpg')">
            </div>
            <h6>Fruity Bloom Notebook</h6>
          </div>
          <div class="product-outer col-12 col-md-4">
            <div class="product">
              <img :src="require('@/assets/img/About/mochipeach.jpg')">
            </div>
            <h6>Fruity Bloom Notepad</h6>
          </div>
          <div class="product-outer col-12 col-md-4">
            <div class="product">
              <img :src="require('@/assets/img/About/mochipeach.jpg')">
            </div>
            <h6>Fruity Bloom Pen</h6>
          </div>
        </div>
      </div>

      <img id="shopnow-pattern" :src="require('@/assets/img/Shop/shopnow pattern-01.png')">
      <div class="shopnow ">
        <div class="text-center">
          <Button>Shop Now</Button>
          <div>V</div>
        </div>
      </div>
      <Product />
    </div>
    <template v-if="true">
      <div class="row">
        <div class="col-12">
          <p class="text-right" style="color: #4997cc; margin-top: 100px; padding: 20px 10px;">
            Contact<br>Email : ppkhemmud@gmail.com<br>Tel
            : 0989453593</p>
        </div>
      </div>
      <div class="text-center font-weight-bold"
        style="padding: 20px 0; color: #4997cc; margin-top: 50px; background-color: #b7d8ee;">
        <h3>Friuty Bloom</h3>
      </div>
    </template>
  </div>
</template>

<script>
import Product from '@/components/Product.vue'
import '@/assets/Fonts/font.css'
export default {
  components: {
    Product
  }
}
</script>

<style scoped>
  img {
    align-self: center;
  }

  .nav {
    padding: 20px 10px;
  }

  h1, h2, h3,
  h4, h5, h6 {
    color: #3994D1;
    font-family: 'YoungSerif';
  }

  p {
    font-family: 'myriad-pro', sans-serif;
    color: #5AB0E0;
    font-size: 1.5em;
  }

  .nav img {
    position: absolute;
    z-index: 0;
    width: 100%;
    left: 0;
    top: 0;
  }

  .product {
    display: flex;
    width: 50%;
  }

  .product-outer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 100px;
  }

  .product-outer h6 {
    margin-top: 30px;
  }

  .product-outer:nth-child(2) {
    border-left: 1px solid #4896CC;
    border-right: 1px solid #4896CC;
  }

  .product img {
    width: 100%;
  }

  .shopnow {
    margin-top: 15%;
    margin-bottom: 20px;
    z-index: 1;
  }

  .shopnow button {
    z-index: 99;
  }

  #shopnow-pattern {
    width: 100%;
    position: absolute;
    z-index: -1;
    left: 0;
  }

  .row {
    margin-top: 50px;
    margin: auto;
  }

  #first {
    margin-top: 20%;
  }

  #second {
    margin: 5%;
  }

  #fourth {
    margin-left: 30px;
    margin-right: 30px;
  }

  #text {
    margin-top: 10px;
  }

  #img-fourth {
    margin-top: 50px;
    max-width: 100%;
    height: auto;
  }

  .footer {
    text-align: center;
    font-size: 12px;
    padding: 15px;
  }

</style>
