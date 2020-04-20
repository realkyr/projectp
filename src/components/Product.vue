<template>
  <div style="display: content;">
    <div class="row" id="third">
      <div class="d-flex align-items-center justify-content-center col-12 col-md-6">
        <div class="row justify-content-center">
          <div  class="col-1 viewSelector-nav prev">
            <div style="height: 100%" class="d-flex align-items-center">
              <a href="#viewSelector" role="button" data-slide="prev">
                <div class="carousel-nav-icon">
                  <ArrowLeft />
                </div>
              </a>
            </div>
          </div>
          <div class="col-10">
            <!--Start carousel-->
            <div id="viewSelector" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div
                    :key="'preview-' + index"
                    v-for="(item, index) in preview"
                    :class="{'carousel-item': true, active: index === 0 }
                  ">
                    <div class="d-flex justify-content-center">
                      <img :src="item">
                    </div>
                  </div>
                </div>
            </div>
            <!--End carousel-->
          </div>
          <div class="col-1 viewSelector-nav next">
            <div style="height: 100%" class="d-flex justify-content-end align-items-center">
              <a href="#viewSelector" data-slide="next">
                <div class="carousel-nav-icon">
                    <ArrowRight />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div style="height: 100%" class="d-flex flex-column justify-content-center">
          <h4>Fruity Bloom Notebook</h4>
          <p>notebook size A5<br>
            120 paper
          </p>

          <br>
          <br>

          <div class="row striped-selector">
            <div @click="select('spring')" :class="{'striped-button': true, 'active': selected === 'spring'}">
              <div class="icon">
                <img :src="require('@/assets/img/Shop/notebook/cloud-01.png')">
              </div>
              <span class="text">Clear Spring</span>
            </div>

            <div @click="select('summer')" :class="{'striped-button': true, active: selected === 'summer', summer: true}">
              <div class="icon">
                <img :src="require('@/assets/img/Shop/notebook/sun-01.png')">
              </div>
              <span class="text">Fresh Summer</span>
            </div>
          </div>

          <div class="row striped-selector">
            <div  @click="select('autumn')" :class="{'striped-button': true, active: selected === 'autumn', autumn: true}">
              <div class="icon">
                <img :src="require('@/assets/img/Shop/notebook/autumn.png')">
              </div>
              <span class="text">Warm Autumn</span>
            </div>

            <div @click="select('winter')" :class="{'striped-button': true, active: selected === 'winter', snow: true}">
              <div class="icon">
                <img :src="require('@/assets/img/Shop/notebook/snow-01.png')">
              </div>
              <span class="text">Frosty Winter</span>
            </div>
          </div>

          <br>
          <br>

          <h3>120 ฿</h3>
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
                        <div class="col-3">
                          <img @click="select('spring')" :src="notebook.spring[0]">
                        </div>
                        <div class="col-3">
                          <img @click="select('summer')" :src="notebook.summer[0]">
                        </div>
                        <div class="col-3">
                          <img @click="select('autumn')" :src="notebook.autumn[0]">
                        </div>
                        <div class="col-3">
                          <img @click="select('winter')" :src="notebook.winter[0]">
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
  components: {
    ArrowLeft,
    ArrowRight
  },
  data () {
    return {
      preview: [
        require('@/assets/img/Shop/notebook/clear spring 01.jpg'),
        require('@/assets/img/Shop/notebook/clear spring 02.jpg'),
        require('@/assets/img/Shop/notebook/clear spring 03.jpg')
      ],
      selected: 'spring',
      notebook: {
        spring: [
          require('@/assets/img/Shop/notebook/clear spring 01.jpg'),
          require('@/assets/img/Shop/notebook/clear spring 02.jpg'),
          require('@/assets/img/Shop/notebook/clear spring 03.jpg')
        ],
        summer: [
          require('@/assets/img/Shop/notebook/fresh summer 01.jpg'),
          require('@/assets/img/Shop/notebook/fresh summer 02.jpg'),
          require('@/assets/img/Shop/notebook/fresh summer 03.jpg')
        ],
        autumn: [
          require('@/assets/img/Shop/notebook/warm autumn 01.jpg'),
          require('@/assets/img/Shop/notebook/warm autumn 02.jpg'),
          require('@/assets/img/Shop/notebook/warm autumn 03.jpg')
        ],
        winter: [
          require('@/assets/img/Shop/notebook/frosty winter 01.jpg'),
          require('@/assets/img/Shop/notebook/frosty winter 02.jpg'),
          require('@/assets/img/Shop/notebook/frosty winter 03.jpg')
        ]
      }
    }
  },
  methods: {
    select (season) {
      this.selected = season
      this.preview = this.notebook[season]
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
  border: 1px solid #A5CEE5;
  color: #3994D1;
  cursor: pointer;
  transition: all 0.5s;
}

.summer.striped-button {
  background: #F9E7AA;
  border: 1px solid #F9E7AA;
  color: #CE8034;
}

.autumn.striped-button {
  background: #DCB173;
  border: 1px solid #DCB173;
  color: #BA6B3C;
}

.snow.striped-button {
  background: #6F9DCD;
  border: 1px solid #6F9DCD;
  color: #C7E4F9;
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
  background: white;
  border-radius: 50%;
}

.striped-button .icon img {
  width: 30px;
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
