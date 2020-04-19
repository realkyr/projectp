<template>
  <div style="height: 100vh; background-color: #cbecfd; overflow: hidden;">
    <transition name="fade" appear>
      <div v-if="isLoadFinish" class="container-fluid home" :style="homeStyle">
        <img id="image-cloud" :src="require('../assets/cloud-01.png')" />
        <img class="cloud" id="c-1" :src="require('@/assets/cloud.png')" >
        <img class="cloud" id="c-6" :src="require('@/assets/cloud.png')" >
        <img class="cloud" id="c-4" :src="require('@/assets/cloud.png')" >
        <img class="cloud" id="c-5" :src="require('@/assets/cloud.png')" >
        <div class="row align-end" style="overflow: hidden; height: 100%;">
          <div :class="['align-self-start', 'col-' + (isScreenVertical ? 12 : 6)]">
            <transition name="fade-delay" appear>
              <div :class="menuClasses">
                <img id="logo" :src="logo">
                <ul :class="{
                  menu: true,
                  mobile: this.isMobile ? true : false,
                  verticle: this.isScreenVertical ? true : false
                }">
                  <li><router-link :to="{name : 'About'}" tag="a">ABOUT</router-link></li>
                  <li><router-link :to="{name: 'Shop'}" tag="a">SHOP</router-link></li>
                  <li><router-link :to="{name: 'Story'}" tag="a">STORY OF US</router-link></li>
                </ul>
              </div>
            </transition>
          </div>
          <div :class="['align-self-end', 'col-' + (isScreenVertical ? 12 : 6)]">
            <div class="d-flex justify-content-center">
              <transition name="people" appear>
                <img
                  :class="{verticle: this.isScreenVertical ? true : false, mobile: this.isMobile ? true : false}"
                  id="image-people"
                  :src="require('../assets/people-01.png')"
                >
              </transition>
            </div>
          </div>
        </div>
      </div>
      <h1 class="loading" v-else>
        <video v-if="start" ref="opening" :width="screen.width" preload autoplay>
          <source :src="require('@/assets/videos/Opening.mp4')" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <div class="pre-opening" v-else>
          <img class="cloud" id="c-1" :src="require('@/assets/cloud.png')" >
          <img class="cloud" id="c-2" :src="require('@/assets/cloud.png')" >
          <img class="cloud" id="c-3" :src="require('@/assets/cloud.png')" >
          <h1 style="z-index: 99; color: #436FB5; font-size: 3vh; font-family: 'YoungSerif'">Hello! welcome to our gang.</h1>
          <div @click="enterHome" @mouseenter="changeStrawberry('in')" @mouseleave="changeStrawberry('out')" class="start-button">
            <img class="strawberry" ref="strawberry" :src="require('@/assets/strawberry.png')" >
            <img class="border-text" :src="require('@/assets/textborder.png')" >
          </div>
        </div>
      </h1>
    </transition>
  </div>
</template>

<script>
import NProgress from 'nprogress'
import '@/assets/css/animation.css'
import '@/assets/css/nprogress.css'
import '@/assets/css/youngserif.css'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data () {
    return {
      appearing: false,
      homeStyle: {
        width: '100vw',
        height: '100vh',
        'background-position': 'center',
        'background-image': 'url(' + require('../assets/bg-01.jpg') + ')',
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover'
      },
      screen: {
        height: window.innerHeight,
        width: window.innerWidth
      }
    }
  },
  mounted () {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
    if (this.isScreenVertical || (this.isMobile && this.isScreenVertical)) {
      this.homeStyle['background-image'] = 'url(' + require('../assets/mobile-01.jpg') + ')'
    } else {
      this.homeStyle['background-image'] = 'url(' + require('../assets/bg-01.jpg') + ')'
    }
  },
  computed: {
    isScreenVertical () {
      return this.screen.height >= this.screen.width
    },
    isMobile () {
      return this.screen.width <= 700 || this.screen.height <= 400
    },
    menuClasses () {
      return {
        container: true,
        mobile: this.isMobile,
        verticle: this.isScreenVertical,
        'menu-container': true
      }
    },
    loaded () {
      return this.loadingPercent + '%'
    },
    isLoadFinish () {
      return this.$store.state.isLoadFinish
    },
    start () {
      return this.$store.state.start
    },
    logo () {
      if (this.isScreenVertical || (this.isMobile && this.isScreenVertical)) {
        return require('../assets/LOGOCloud.png')
      } else {
        return require('../assets/logo.png')
      }
    }
  },
  methods: {
    handleResize () {
      this.screen.width = window.innerWidth
      this.screen.height = window.innerHeight
    },
    changeStrawberry (status) {
      if (status === 'in') this.$refs.strawberry.src = require('@/assets/strawberry-cut.png')
      else this.$refs.strawberry.src = require('@/assets/strawberry.png')
    },
    enterHome () {
      this.$store.state.start = true
      NProgress.configure({ showSpinner: false })
      NProgress.start()
      setTimeout(() => {
        NProgress.done()
        this.$store.state.isLoadFinish = true
      }, 12000)
    }
  },
  watch: {
    screen: {
      handler (newScreen, oldScreen) {
        console.log('screenChange')
        if (this.isScreenVertical || (this.isMobile && this.isScreenVertical)) {
          this.homeStyle['background-image'] = 'url(' + require('../assets/mobile-01.jpg') + ')'
        } else {
          this.homeStyle['background-image'] = 'url(' + require('../assets/bg-01.jpg') + ')'
        }
      },
      deep: true
    }
  }
}
</script>

<style scoped>
body {
  background-color: #cbecfd;
}
</style>

<style>
body {
  margin: 0;
}

#image-people.verticle {
  max-width: 100vw;
  max-height: 60vh;
}

#image-people.verticle.mobile {
  max-width: 100vw;
  max-height: 50vh;
}

#image-people {
  max-width: 70vw;
  max-height: 100vh;
  z-index: 1;
}

#logo {
  max-width: 500px;
  z-index: 2;
}

.menu-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'YoungSerif';
  font-size: 30pt;
}

#image-cloud {
  z-index: 2;
  position: fixed;
  right: 0;
  bottom: 0;
  width: 70vw;
}

.menu {
  list-style: none;
  z-index: 2;
}

ul.menu {
  padding: 0;
}

.menu li {
  display: block;
  margin: 50px 0;
}

.menu-container.verticle {
  height: 50vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
}

.menu.verticle {
  padding: 0;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.menu.mobile li {
  display: block;
  margin: 10px 0;
}

@media (max-width: 1440px) {
  #logo {
    max-width: 400px
  }
}

@media (max-width: 1280px) {
  .menu-container {
    padding-top: 50px;
    font-size: 25pt;
  }
}

@media (max-width: 1199px) {

  #logo {
    max-width: 300px
  }
}

@media (max-width: 991px) {
  #image-people {
    max-width: 65vw;
  }

  .menu li {
    display: block;
    margin: 30px 0;
  }
}

@media (max-width: 767px) {
  #image-people {
    max-width: 100vw;
  }

  #logo {
    max-width: 200px
  }

  #image-cloud {
    display: none;
  }

  .menu li {
    margin: 20px 0;
    font-size: 14pt;
  }

  .menu-container.mobile {
    padding: 0;
  }
}

@media (max-width: 400px) {
  #image-cloud {
    display: none;
  }

  .start-button img.strawberry {
    max-width: 80px !important;
  }

}

/* mobile with horizontal */

@media (max-height: 600px) {
  .menu-container {
    padding-top: 10px;
    font-size: 20pt;
  }

  .menu li {
    margin: 30px 0;
    font-size: 20pt;
  }
}

@media (max-height: 400px) {
  #image-cloud {
    max-width: 50vw;
  }

  #logo {
    max-width: 230px
  }

  .menu li {
    font-size: 15pt;
  }
}

.menu a,
.menu a:hover {
  position: relative;
  display: inline-block;
  margin: 15px 25px;
  outline: none;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #436FB5;
}

.menu a:hover::before,
.menu a:focus::before {
  color: #fff;
  text-shadow: 10px 0 #fff, -10px 0 #fff;
}

.menu a::before {
  position: absolute;
  top: 80%;
  left: 50%;
  color: transparent;
  content: '•';
  text-shadow: 0 0 transparent;
  font-size: 0.7em;
  -webkit-transition: text-shadow 0.3s, color 0.3s;
  -moz-transition: text-shadow 0.3s, color 0.3s;
  transition: text-shadow 0.3s, color 0.3s;
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  transform: translateX(-50%);
  pointer-events: none;
}

.loading {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

.pre-opening {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.start-button {
  position: relative;
  margin-top: 30px;
  z-index: 99;
}

.start-button:hover img.border-text {
  cursor: pointer;
  animation: rotate 10s infinite linear both;
}

.start-button img.strawberry {
  position: absolute;
  left: 30%;
  top: 25%;
  max-width: 100px;
}

.start-button img.border-text {
  max-width: 245px;
  animation: none;
}

/* cloud animation */
.cloud {
  position: absolute;
  max-width: 100px;
  z-index: 1;
  animation: cloudMove 10s linear infinite;
}

#c-1 {
  left: 32%;
  top: 55%
}

#c-2 {
  left: 40%;
  top: 30%
}

#c-3 {
  left: 65%;
  top: 44%
}

#c-4 {
  left: 10%;
  top: 20%
}

#c-5 {
  right: 10%;
  top: 5%
}

#c-6 {
  left: 40%;
  top: 30%
}

.home #c-6 {
  top: 10%
}

@media (max-width: 1024px) {
  #c-1 {
    left: 25%;
  }

  #c-2 {
    left: 32%;
  }
}

@media (max-width: 800px) {
  #c-1 {
    left: 20%;
  }

  #c-2 {
    left: 30%;
  }

  #c-6 {
    display: none;
  }
}

@media (max-width: 600px) {
  #c-1 {
    left: 10%;
  }

  #c-2 {
    left: 20%;
  }

  #c-6 {
  left: 70%;
}
}

@keyframes rotate {
  0% {
    transform:  rotateZ(0deg);
  }
  100% {
    transform:  rotateZ(360deg);
  }
}

@keyframes cloudMove {
  0% {
    transform:  translateY(0);
  }
  50% {
    transform:  translateY(100%);
  }
  100% {
    transform:  translateY(0);
  }
}
</style>
