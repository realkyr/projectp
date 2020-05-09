<template>
  <div>
    <div id="landing" class="landing"></div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-absolute-path
import animation from '../../../../public/Animation/LandingPage/data.json'

export default {
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
.landing {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
