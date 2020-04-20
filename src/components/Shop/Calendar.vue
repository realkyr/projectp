<template>
  <div
    class="modal fade"
    id="calendar-modal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <h5 class="modal-title text-center" id="exampleModalLongTitle">Fruity Bloom Calendar 2020</h5>

        <div class="row">
          <img class="preview" :src="preview" />
        </div>

        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-1 seasonSelector-nav prev">
            <a href="#calendarSelector" role="button" data-slide="prev">
              <div class="carousel-nav-icon">
                <ArrowLeft />
              </div>
            </a>
          </div>
          <div class="album col-10">
            <!--Start carousel-->
            <div id="calendarSelector" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row">
                    <div
                      @click="changePreview(0, index)"
                      :key="'image-01-' + index"
                      v-for="(item, index) in calendar[0]"
                      class="col-3 d-flex justify-content-center"
                    >
                      <img :src="item" />
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="row">
                    <div @click="changePreview(1, index)" :key="'image-02-' + index" v-for="(item, index) in calendar[1]" class="col-3 d-flex justify-content-center">
                      <img :src="item" />
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="row">
                    <div @click="changePreview(2, index)" :key="'image-03-' + index" v-for="(item, index) in calendar[2]" class="col-3 d-flex justify-content-center">
                      <img :src="item" />
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="row">
                    <div @click="changePreview(3, index)" :key="'image-04-' + index" v-for="(item, index) in calendar[3]" class="col-3 d-flex justify-content-center">
                      <img :src="item" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--End carousel-->
          </div>
          <div class="col-1 seasonSelector-nav next">
            <a href="#calendarSelector" data-slide="next">
              <div class="carousel-nav-icon">
                <ArrowRight />
              </div>
            </a>
          </div>
        </div>

        <div class="row justify-content-between">
          <div class="col-4">
            <p>
              calendar size- 16 x 24 cm.<br>
              120 paper
            </p>
          </div>
          <div class="col-3">
            <h4 class="text-center">120 ฿</h4>
          </div>
        </div>

        <div class="row justify-content-end">
          <div class="col-3">
            <button class="shop">Add to cart</button>
          </div>
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
      preview: require('@/assets/img/Shop/calendar/all1-01.jpg'),
      calendar: [
        [
          require('@/assets/img/Shop/calendar/all1-01.jpg'),
          require('@/assets/img/Shop/calendar/all1-02.jpg'),
          require('@/assets/img/Shop/calendar/jan.jpg'),
          require('@/assets/img/Shop/calendar/feb.jpg')
        ],
        [
          require('@/assets/img/Shop/calendar/mar.jpg'),
          require('@/assets/img/Shop/calendar/apr.jpg'),
          require('@/assets/img/Shop/calendar/may.jpg'),
          require('@/assets/img/Shop/calendar/june.jpg')
        ],
        [
          require('@/assets/img/Shop/calendar/jul.jpg'),
          require('@/assets/img/Shop/calendar/aug.jpg'),
          require('@/assets/img/Shop/calendar/sep.jpg'),
          require('@/assets/img/Shop/calendar/oct.jpg')
        ],
        [
          require('@/assets/img/Shop/calendar/nov.jpg'),
          require('@/assets/img/Shop/calendar/dec.jpg')
        ]
      ]
    }
  },
  methods: {
    changePreview (range, index) {
      this.preview = this.calendar[range][index]
    }
  }
}
</script>

<style scoped>
img {
  align-self: center;
}

.modal-content {
  padding: 50px;
}

.preview {
  width: 100%;
}

.carousel-item img {
  width: 90%;
  padding: 20px 0;
}

p {
  font-family: 'myriad-pro', sans-serif;
  color: #5AB0E0;
  font-size: 1.2em;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #3994d1;
  font-family: "YoungSerif";
}

.shop {
  background: #4896CC;
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
</style>
