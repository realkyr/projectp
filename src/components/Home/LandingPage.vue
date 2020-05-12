<template>
  <div>
    <Navbar @navto="nextSection" :section="section" />
    <Landing  @nextpage="nextSection" />
    <About @nextpage="nextSection" />
    <Story @nextpage="nextSection" />
    <Shop @nextpage="nextSection" />
    <Contact />
  </div>
</template>

<script>
import Navbar from '@/components/Home/Navbar'
import Landing from '@/components/Home/Section/Landing'
import About from '@/components/Home/Section/About'
import Story from '@/components/Home/Section/Story'
import Shop from '@/components/Home/Section/Shop'
import Contact from '@/components/Home/Section/Contact'

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
const keys = { 37: 1, 38: 1, 39: 1, 40: 1 }

function preventDefaultForScrollKeys (e) {
  if (keys[e.keyCode]) {
    e.preventDefault()
    return false
  }
}

// modern Chrome requires { passive: false } when adding event
let supportsPassive = false
try {
  window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true }
  }))
} catch (e) {}

const wheelOpt = supportsPassive ? { passive: false } : false
const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'

export default {
  components: {
    Landing,
    Navbar,
    About,
    Story,
    Shop,
    Contact
  },
  data () {
    return {
      section: 0
    }
  },
  mounted () {
    this.disableScroll()
  },
  destroyed () {
    this.enableScroll()
  },
  methods: {
    nextSection (e) {
      console.log(e)
      this.section = e

      if (e === 1) {
        const section = document.querySelector('#about-section')
        section.scrollIntoView({ behavior: 'smooth' })
      } else if (e === 2) {
        const section = document.querySelector('#story-section')
        section.scrollIntoView({ behavior: 'smooth' })
      } else if (e === 3) {
        const section = document.querySelector('#shop-section')
        section.scrollIntoView({ behavior: 'smooth' })
      } else if (e === 4) {
        const section = document.querySelector('#contact-section')
        section.scrollIntoView({ behavior: 'smooth' })
      } else if (e === 0) {
        const section = document.querySelector('#landing-sec')
        section.scrollIntoView({ behavior: 'smooth' })
      }
    },
    disableScroll () {
      window.addEventListener('DOMMouseScroll', this.preventDefault, false) // older FF
      window.addEventListener(wheelEvent, this.preventDefault, wheelOpt) // modern desktop
      window.addEventListener('touchmove', this.preventDefault, wheelOpt) // mobile
      window.addEventListener('keydown', preventDefaultForScrollKeys, false)
    },
    enableScroll () {
      window.removeEventListener('DOMMouseScroll', this.preventDefault, false)
      window.removeEventListener(wheelEvent, this.preventDefault, wheelOpt)
      window.removeEventListener('touchmove', this.preventDefault, wheelOpt)
      window.removeEventListener('keydown', preventDefaultForScrollKeys, false)
    },
    preventDefault (e) {
      e.preventDefault()
    }
  }
}
</script>
