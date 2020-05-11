<template>
  <div class="landing-container">
    <div id="landing" class="landing"></div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-absolute-path
import animation from '@/assets/Animation/LandingPage/data.json'

export default {
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
  }
}
</script>

<style scoped>
.landing-container{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.landing {
  width: 100vw;
}
</style>
