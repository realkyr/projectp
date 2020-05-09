<template>
  <div
    class="modal fade"
    :id="`${product}-modal`"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <h5 class="modal-title text-center" id="exampleModalLongTitle">Fruity Bloom {{ item.detail.product }}</h5>

        <div class="row">
          <img class="preview" :src="item.detail.image" />
        </div>

        <div class="row justify-content-between">
          <div class="col-4">
            <template v-if="product === 'notepad'">
              <p>notepad size- 9 x 12 cm.<br>
                40 paper
              </p>
            </template>

            <template v-if="product === 'pen'">
              <p>gel pen</p>
            </template>

            <template v-if="product === 'notebook'">
              <p>notebook size A5<br>
                120 paper
              </p>
            </template>
          </div>
          <div class="col-3">
            <h4 class="text-center">{{ item.detail.price }} ฿</h4>
          </div>
        </div>

        <div class="row justify-content-end">
          <div class="col-3">
            <button @click="confirm" class="shop">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    product: {
      type: String,
      default: 'pen'
    },
    item: {
      type: Object,
      default: null
    },
    preview: {
      type: String,
      default: 'https://drive.google.com/uc?id=1KIwIpHcJAB71yy3JQYAH_sk3K0SZ94mi'
    }
  },
  methods: {
    confirm () {
      this.addToCart(this.item)
      // eslint-disable-next-line no-undef
      $(`#${this.product}-modal`).modal('hide')
    },
    ...mapMutations(['addToCart'])
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

@media screen and (max-width: 400px) {
  .modal-content {
    padding: 20px;
  }
}

.preview {
  margin-bottom: 20px;
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
