<template>
  <div class="landing-container" id="landing-sec">
    <div id="landing" class="landing"></div>
    <img class="cloud-footer" :src="require('@/assets/img/Home/cloudfoot-01.png')" alt="cloud footer">
    <NextButton @click.native="nextSection()" class="next-button" />
  </div>
</template>

<script>
import NextButton from '@/components/icons/NextButton.vue'
import animation from '@/assets/Animation/LandingPage/data.json'

export default {
  components: {
    NextButton
  },
  data () {
    return {
      screen: {
        height: window.innerHeight,
        width: window.innerWidth
      }
    }
  },
  mounted () {
    // eslint-disable-next-line no-undef
    bodymovin.loadAnimation({
      container: document.getElementById('landing'),
      rederer: 'svg',
      loop: false,
      autoplay: true,
      animationData: animation
    })
  },
  methods: {
    nextSection () {
      console.log('next!')
      this.$emit('nextpage', 1)
    }
  }
}
</script>

<style scoped>
.next-button {
  position: absolute;
  bottom: 0;
  cursor: pointer;
}

.cloud-footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none
}
.landing-container{
  background: #CAECFC;
  padding-top: 50px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  z-index: 80;
}
.landing {
  width: 100vw;
}
</style>
