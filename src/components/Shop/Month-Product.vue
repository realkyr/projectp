<template>
  <div style="display: content;">
    <div class="row" id="third">
      <div class="d-flex align-items-center justify-content-center col-12 col-md-6">
        <div class="row justify-content-center">
          <div class="col-10">
            <img width="100%" :src="require(`@/assets/img/Shop/${product}/${selected}(${product}).jpg`)">
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div style="height: 100%" class="d-flex flex-column justify-content-center">
          <h4>Fruity Bloom {{product.charAt(0).toUpperCase() + product.substring(1)}}</h4>
          <template v-if="product === 'notepad'">
            <p>notepad size- 9 x 12 cm.<br>
              40 paper
            </p>
          </template>

          <template v-if="product === 'pen'">
            <p>gel pen</p>
          </template>

          <br>
          <br>

          <div class="row striped-selector">
            <div
              @click="select(quad)"
              :key="quad" v-for="quad in ['jan', 'feb', 'mar', 'apr']"
              class="icon"
              :class="{'striped-button': true, 'active': selected === quad, [quad]: true}">
              <div class="icon">
                <div class="dot" />
              </div>
              <span class="text">{{quad.charAt(0).toUpperCase() + quad.substring(1)}}.</span>
            </div>

            <div
              @click="select(quad)"
              :key="quad" v-for="quad in ['may', 'jun', 'jul', 'aug']"
              class="icon"
              :class="{'striped-button': true, 'active': selected === quad, [quad]: true}">
              <div class="icon">
                <div class="dot" />
              </div>
              <span class="text">{{quad.charAt(0).toUpperCase() + quad.substring(1)}}.</span>
            </div>

            <div
              @click="select(quad)"
              :key="quad" v-for="quad in ['sep', 'oct', 'nov', 'dec']"
              class="icon"
              :class="{'striped-button': true, 'active': selected === quad, [quad]: true}">
              <div class="icon">
                <div class="dot" />
              </div>
              <span class="text">{{quad.charAt(0).toUpperCase() + quad.substring(1)}}.</span>
            </div>

          </div>

          <br>
          <br>

          <h3>{{product === 'pen'? 30 : 65}} ฿</h3>
          <button class="shop">Add To Cart</button>
        </div>
      </div>
    </div>

    <div class="text-center">
      <div class="row d-flex justify-content-center align-items-center">
          <div class="seasonSelector-nav prev">
            <a href="#seasonSelector" role="button" data-slide="prev">
              <div class="carousel-nav-icon">
                <ArrowLeft />
              </div>
            </a>
          </div>
          <div class="album col-11">
            <!--Start carousel-->
            <div id="seasonSelector" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                      <div class="row">
                        <div :key="'cor-' + quad" v-for="quad in ['jan', 'feb', 'mar', 'apr']" class="col-3">
                          <img
                            @click="select(quad)"
                            :src="require(`@/assets/img/Shop/${product}/${quad}(${product}).jpg`)"
                          >
                        </div>
                      </div>
                  </div>

                  <div class="carousel-item">
                      <div class="row">
                        <div :key="'cor-' + quad" v-for="quad in ['may', 'jun', 'jul', 'aug']" class="col-3">
                          <img
                            @click="select(quad)"
                            :src="require(`@/assets/img/Shop/${product}/${quad}(${product}).jpg`)"
                          >
                        </div>
                      </div>
                  </div>

                  <div class="carousel-item">
                      <div class="row">
                        <div :key="'cor-' + quad" v-for="quad in ['sep', 'oct', 'nov', 'dec']" class="col-3">
                          <img
                            @click="select(quad)"
                            :src="require(`@/assets/img/Shop/${product}/${quad}(${product}).jpg`)"
                          >
                        </div>
                      </div>
                  </div>
                </div>
            </div>
            <!--End carousel-->
          </div>
          <div class="seasonSelector-nav next">
            <a href="#seasonSelector" data-slide="next">
              <div class="carousel-nav-icon">
                  <ArrowRight />
              </div>
            </a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowLeft from '@/components/icons/arrow-left.vue'
import ArrowRight from '@/components/icons/arrow-right.vue'
export default {
  props: {
    product: {
      type: String,
      default: 'pen'
    }
  },
  components: {
    ArrowLeft,
    ArrowRight
  },
  data () {
    return {
      selected: 'jan',
      month: {
        jan: {
          bg: '#F8B978',
          text: '#E28437'
        }
      }
    }
  },
  methods: {
    select (month) {
      this.selected = month
    }
  }
}
</script>

<style>

.viewSelector-nav.prev .carousel-nav-icon,
.viewSelector-nav.next .carousel-nav-icon,
.seasonSelector-nav.prev .carousel-nav-icon,
.seasonSelector-nav.next .carousel-nav-icon {
  border: 1px solid #A5CEE5;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 50%;
}
.arrow-left,
.arrow-right {
  fill: #fff;
  fill-opacity: 0;
  stroke: #4896cc;
  stroke-miterlimit: 10;
  transition: all 0.3s;
}

.viewSelector-nav.prev a:hover .arrow-left,
.viewSelector-nav.next a:hover .arrow-right,
.seasonSelector-nav.prev a:hover .arrow-left,
.seasonSelector-nav.next a:hover .arrow-right  {
  fill-opacity: 1;
  fill: #4896cc;
}
</style>

<style scoped>
.album #seasonSelector{
  background-color: #D3DDE2;
}

.carousel-item img {
  width: 90%;
  padding: 20px 0;
  cursor: pointer;
}

#viewSelector .carousel-item img {
  width: 100% !important;
}

#viewSelector .carousel-item img {
  width: 90%;
}

h1, h2, h3,
h4, h5, h6 {
  color: #3994D1;
  font-family: 'YoungSerif';
}

.striped-selector {
  margin: 10px 0 10px 0;
  display: flex;
}

.striped-selector.row {
  margin: 0;
}

.striped-button {
  background: #A5CEE5;
  padding: 5px 0 5px 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  width: 200px;
  border-radius: 25px;
  display: inline-flex;
  align-items: center;
  border: 1px solid;
  cursor: pointer;
  transition: all 0.5s;
}

.active.striped-button,
.striped-button:hover {
  background: white;
}

.striped-button .icon {
  width: 40px;
  height: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 50%;
}

.striped-button .icon .dot {
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;
  transition: all 0.5s;
}
/* jan color */

.jan {
  background: #F8B978;
  color: #E28437
}

.jan:hover .icon,
.active.jan .icon {
  border: 1px solid #F8B978;
}

.jan:hover .dot,
.active.jan .dot {
  background: #F8B978;
}

/* feb color */

.feb {
  background: #84CFF2;
  color: #1F94C1
}

.feb:hover .icon,
.active.feb .icon {
  border: 1px solid #84CFF2;
}

.feb:hover .dot,
.active.feb .dot {
  background: #84CFF2;
}

/* mar color */

.mar {
  background: #C74B4B;
  color: #A01515;
}

.mar:hover .icon,
.active.mar .icon {
  border: 1px solid #C74B4B;
}

.mar:hover .dot,
.active.mar .dot {
  background: #C74B4B;
}

.striped-button .text {
  font-family: 'YoungSerif';
  margin-left: 10px;
}

/* apr color */

.apr {
  background: #F7C6D3;
  color: #E0698E;
}

.apr:hover .icon,
.active.apr .icon {
  border: 1px solid #F7C6D3;
}

.apr:hover .dot,
.active.apr .dot {
  background: #F7C6D3;
}

.striped-button .text {
  font-family: 'YoungSerif';
  margin-left: 10px;
}

/* may color */

.may {
  background: #EC6B6A;
  color: #D13737;
}

.may:hover .icon,
.active.may .icon {
  border: 1px solid #EC6B6A;
}

.may:hover .dot,
.active.may .dot {
  background: #EC6B6A;
}

/* jun color */

.jun {
  background: #7E6EAF;
  color: #4C3C8E;
}

.jun:hover .icon,
.active.jun .icon {
  border: 1px solid #7E6EAF;
}

.jun:hover .dot,
.active.jun .dot {
  background: #7E6EAF;
}

/* jul color */

.jul,
.jul:hover .dot,
.active.jul .dot {
  background: #F7BF5D;
  color: #C68926;
}

.jul:hover .icon,
.active.jul .icon {
  border: 1px solid #F7BF5D;
}

/* aug color */

.aug,
.aug:hover .dot,
.active.aug .dot {
  background: #69AF71;
  color: #38843D;
}

.aug:hover .icon,
.active.aug .icon {
  border: 1px solid #69AF71;
}

/* sep color */

.sep,
.sep:hover .dot,
.active.sep .dot {
  background: #F7EBAE;
  color: #C4A420;
}

.sep:hover .icon,
.active.sep .icon {
  border: 1px solid #F7EBAE;
}

/* oct color */

.oct,
.oct:hover .dot,
.active.oct .dot {
  background: #F8D58E;
  color: #BF851D;
}

.oct:hover .icon,
.active.oct .icon {
  border: 1px solid #F8D58E;
}

/* nov color */

.nov,
.nov:hover .dot,
.active.nov .dot {
  background: #99C989;
  color: #579640;
}

.nov:hover .icon,
.active.nov .icon {
  border: 1px solid #99C989;
}

/* dec color */

.dec,
.dec:hover .dot,
.active.dec .dot {
  background: #F2A7BD;
  color: #C4456F;
}

.dec:hover .icon,
.active.dec .icon {
  border: 1px solid #F2A7BD;
}

.striped-button .text {
  font-family: 'YoungSerif';
  margin-left: 10px;
}

p {
  font-family: 'myriad-pro', sans-serif;
  color: #5AB0E0;
  font-size: 1.5em;
}

.arrow {
  display: inline-block;
  padding: 20px;
}

#third {
  margin: 15% 0 200px 0;
}

img {
  align-self: center;
}

.shop {
  background: #4896CC;
  width: 200px;
  color: white;
  font-size: 20px;
  font-family: myriad-pro, sans-serif;
  font-weight: 700;
  padding: 5px 25px;
  border-radius: 20px;
  margin: 0;
  cursor: pointer;
  border: 1px solid #4896CC;
  transition: all 0.5s;
}

.shop:hover {
  background: white;
  color: #4896CC;
}

.seasonSelector-nav {
  position: absolute;
  z-index: 99;
}

.seasonSelector-nav.prev {
  left: 3%;
}

.seasonSelector-nav.next {
  right: 3%;
}

</style>
