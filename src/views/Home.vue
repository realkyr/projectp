<template>
  <div style="height: 100vh; background-color: #cbecfd;">
    <transition name="fade" appear>
      <b-container v-if="isLoadFinish" fluid class="home" :style="homeStyle">
        <b-img id="image-cloud" :src="require('../assets/cloud-01.png')" />
        <b-row align-v="end" style="overflow: hidden; height: 100%;">
          <b-col align-self="start" :cols="isScreenVertical ? 12 : 6">
            <transition name="fade-delay" appear>
              <b-container :class="menuClasses">
                <img id="logo" src="../assets/logo.png">
                <ul :class="{
                  menu: true,
                  mobile: this.isMobile ? true : false,
                  verticle: this.isScreenVertical ? true : false
                }">
                  <li><router-link :to="{name : 'About'}" tag="a">ABOUT</router-link></li>
                  <li><router-link to="#" tag="a">SHOP</router-link></li>
                  <li><router-link :to="{name: 'Story'}" tag="a">STORY OF US</router-link></li>
                </ul>
              </b-container>
            </transition>
          </b-col>
          <b-col :cols="isScreenVertical ? 12 : 6">
            <div class="d-flex justify-content-center">
              <transition name="people" appear>
                <b-img
                  :class="{verticle: this.isScreenVertical ? true : false, mobile: this.isMobile ? true : false}"
                  id="image-people"
                  :src="require('../assets/people-01.png')"
                />
              </transition>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <h1 style="display: flex; height: 100vh; align-items: center;" v-else>
        <video ref="opening" :width="screen.width" preload autoplay muted>
          <source :src="require('@/assets/videos/Opening.mp4')" type="video/mp4">
          Your browser does not support the video tag.
        </video>
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
      },
      isLoadFinish: false
    }
  },
  mounted () {
    NProgress.configure({ showSpinner: false })
    NProgress.start()
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
    if (this.isScreenVertical || (this.isMobile && this.isScreenVertical)) {
      this.homeStyle['background-image'] = 'url(' + require('../assets/mobile-01.jpg') + ')'
    } else {
      this.homeStyle['background-image'] = 'url(' + require('../assets/bg-01.jpg') + ')'
    }
    setTimeout(() => {
      NProgress.done()
      this.isLoadFinish = true
    }, 11000)
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
        mobile: this.isMobile,
        verticle: this.isScreenVertical,
        'menu-container': true
      }
    },
    loaded () {
      return this.loadingPercent + '%'
    }
  },
  methods: {
    handleResize () {
      this.screen.width = window.innerWidth
      this.screen.height = window.innerHeight
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

<style>

body {
  margin: 0;
  background-color: #cbecfd;
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
  max-width: 500px
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
  margin: 20px 0;
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
</style>
