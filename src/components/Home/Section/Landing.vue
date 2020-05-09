<template>
  <div>
    <div id="landing"></div>
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
