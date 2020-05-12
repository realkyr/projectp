<template>
  <div class="story-container" ref="stcon" style="background: #F8B978;">
    <!-- <h1 v-if="loaded < 12">Loading</h1> -->
    <div @click="next" class="click-aria"></div>
    <div class="month-elements first init" ref="jan"></div>
    <div class="month-elements second" ref="jan2"></div>
    <div class="month-elements first" ref="feb"></div>
    <div class="month-elements second" ref="feb2"></div>
    <div class="month-elements first" ref="mar"></div>
    <div class="month-elements second" ref="mar2"></div>
    <div class="month-elements first" ref="apr"></div>
    <div class="month-elements second" ref="apr2"></div>
    <div class="month-elements first" ref="may"></div>
    <div class="month-elements second" ref="may2"></div>
    <div class="month-elements first" ref="jun"></div>
    <div class="month-elements second" ref="jun2"></div>
    <div class="month-elements first" ref="jul"></div>
    <div class="month-elements second" ref="jul2"></div>
    <div class="month-elements first" ref="aug"></div>
    <div class="month-elements second" ref="aug2"></div>
    <div class="month-elements first" ref="sep"></div>
    <div class="month-elements second" ref="sep2"></div>
    <div class="month-elements first" ref="oct"></div>
    <div class="month-elements second" ref="oct2"></div>
    <div class="month-elements first" ref="nov"></div>
    <div class="month-elements second" ref="nov2"></div>
    <div class="month-elements first" ref="dec"></div>
    <div class="month-elements second" ref="dec2"></div>
    <div :class="['three-dot', 'left', monthList[monthIndex]]">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <div :class="['three-dot', 'right', monthList[monthIndex]]">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
</template>

<script>
import lottie from 'lottie-web'
import '@/assets/css/story.css'

export default {
  data () {
    return {
      clickable: false,
      monthList: [
        'jan', 'feb', 'mar', 'apr', 'may', 'jun',
        'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
      ],
      loaded: 0,
      monthIndex: 0,
      contentIndex: 0,
      color: [
        '#F8B978', '#84CFF2', '#C74B4B', '#F7C6D3',
        '#EC6B6A', '#7E6EAF', '#F7BF5D', '#69AF71',
        '#F7EBAE', '#F8D58E', '#99C989', '#F8D0DA',
        '#AEE0F4'
      ],
      elementControl: {
        jan: true,
        feb: true
      },
      anim: {}
    }
  },
  async mounted () {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    window.addEventListener('resize', () => {
      // We execute the same script as before
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
    // for (const monthEl of this.monthList) {
    //   this.setAnimation(monthEl)
    // }
    this.setAnimation('jan')
    this.anim.jan.play()
    await this.wait(5500)
    this.clickable = true
  },
  methods: {
    async next () {
      if (!this.clickable) return
      let id = ''
      let idstop = ''
      this.clickable = false
      this.contentIndex = this.contentIndex === 1 ? 0 : 1
      if (this.contentIndex === 0) this.monthIndex += 1

      if (this.contentIndex === 1) {
        idstop = this.monthList[this.monthIndex]
        id = this.monthList[this.monthIndex] + '2'
        this.setAnimation(id)
        const first = this.$refs[this.monthList[this.monthIndex]]
        const sec = this.$refs[this.monthList[this.monthIndex] + '2']
        first.classList.remove('init')
        first.classList.remove('appear')
        first.classList.add('leave')
        sec.classList.add('appear')
      } else {
        idstop = this.monthList[this.monthIndex - 1] + '2'
        id = this.monthList[this.monthIndex]
        this.setAnimation(id)
        this.elementControl[this.monthList[this.monthIndex]] = true
        const sec = this.$refs[this.monthList[this.monthIndex - 1] + '2']
        sec.classList.remove('appear')
        sec.classList.add('leave')
        this.$refs.stcon.style.background = this.color[this.monthIndex]
        const first = this.$refs[this.monthList[this.monthIndex]]
        first.classList.add('appear')
        await this.wait(1500)
        this.elementControl[this.monthList[this.monthIndex - 1]] = false
      }

      // if (this.monthIndex === 2 && this.contentIndex === 0) {
      //   this.returnToJan()
      // }
      this.anim[id].play()
      await this.wait(1200)
      this.anim[idstop].destroy()
      this.clickable = true
    },
    setAnimation (month) {
      lottie.setQuality('low')
      const data = require(`@/assets/Animation/Story/${month}.json`)
      console.log(month)
      this.anim[month] = lottie.loadAnimation({
        container: this.$refs[month],
        renderer: 'svg',
        loop: true,
        autoplay: false,
        animationData: data
      })
      // data = require(`@/assets/Animation/Story/${month}_2.json`)
      // this.anim[month + '2'] = lottie.loadAnimation({
      //   container: this.$refs[month + '2'],
      //   renderer: 'svg',
      //   loop: true,
      //   autoplay: true,
      //   animationData: data
      // })
      this.anim[month].addEventListener('DOMLoaded', () => {
        // this.loaded += 1
        console.log('complete')
        // if (month !== 'jan') this.anim[month].stop()
      })
      // this.anim[month + '2'].addEventListener('DOMLoaded', () => {
      //   this.loaded += 1; console.log('complete')
      //   this.anim[month + '2'].stop()
      // })
    },
    async wait (ms) {
      return new Promise(resolve => {
        setTimeout(resolve, ms)
      })
    },
    returnToJan () {
      this.$refs[this.monthList[this.monthIndex]].classList.remove('appear')
      this.returning = setInterval(async () => {
        this.monthIndex -= 1
        let month = this.monthList[this.monthIndex] + '2'
        const sec = this.$refs[month]
        this.setAnimation(month)
        sec.classList.remove('leave')
        sec.style.transition = 'all .5s ease-in-out'
        this.$refs.stcon.style.background = this.color[this.monthIndex]
        await this.wait(400)
        this.anim[month].destroy()
        sec.style.transition = ''

        month = this.monthList[this.monthIndex]
        const first = this.$refs[month]
        this.setAnimation(month)
        if (this.monthList[this.monthIndex] === 'jan') {
          first.classList.remove('leave')
          first.classList.add('appear')
          clearInterval(this.returning)
          return
        }
        first.classList.remove('leave')
        first.style.transition = 'all .5s ease-in-out'
        await this.wait(500)
        this.anim[month].destroy()
        first.style.transition = ''
      }, 3000)
    }
  }
  // watch: {
  //   loaded (newVal, oldVal) {
  //     console.log(newVal)
  //     if (newVal >= 12) {
  //       this.clickable = true
  //       this.anim.jan.play()
  //     }
  //   }
  // }
}
</script>

<style scoped>

.click-aria {
  width: 70vh;
  height: 70vh;
  z-index: 99;
  position: absolute;
  cursor: pointer;
}

.month-elements {
  width: 80vw;
  height: 80vh;
  position: absolute;
  transform: scale(0);
  z-index: 60;
}

.month-elements.appear {
  -webkit-transform:  scale(1);
  -webkit-transition: -webkit-transform 1.5s ease-in-out .5s;
  -moz-transform: scale(1);
  -moz-transition: -moz-transform 1.5s ease-in-out .5s;
  transform: scale(1);
  transition: all 1.5s ease-in-out .5s;
  z-index: 80;
}

.month-elements.init {
  transform: scale(1);
  -webkit-animation: appearing 5s ease-out backwards;
  animation: appearing 5s ease-out backwards;
}

@keyframes appearing {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  10% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}

@-webkit-keyframes appearing {
  0% {
    opacity: 0;
    -webkit-transform: scale(0);
  }
  10% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
  }
}

.month-elements.leave {
  -webkit-transform:  scale(2);
  -webkit-transition: -webkit-transform 1.5s ease-in-out;
  -moz-transform: scale(2);
  -moz-transition: -moz-transform 1.5s ease-in-out;
  transform: scale(2);
  transition: all 1.5s ease-in-out;
  opacity: 0;
  z-index: 70;
  will-change: transform;
}

.story-container {
  position: relative;
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  -webkit-transition: background 2s ease;
  transition: background 2s ease;
}

</style>
