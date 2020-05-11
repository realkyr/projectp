<template>
  <div class="story-container" ref="stcon" style="background: #F8B978;">
    <div @click="next" class="click-aria"></div>
    <div class="month-elements first init" v-if="elementControl.jan" ref="jan"></div>
    <div class="month-elements second" v-if="elementControl.jan" ref="jan2"></div>
    <div class="month-elements first" v-if="elementControl.feb ? elementControl.feb : true" ref="feb"></div>
    <div class="month-elements second" v-if="elementControl.feb ? elementControl.feb : true" ref="feb2"></div>
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
      monthList: ['jan', 'feb'],
      monthIndex: 0,
      contentIndex: 0,
      color: [
        '#F8B978', '#84CFF2', '#C74B4B', '#F7C6D3',
        '#EC6B6A', '#7E6EAF', '#F7BF5D', '#69AF71',
        '#F7EBAE', '#F8D58E', '#99C989', '#F8D0DA',
        '#AEE0F4'
      ],
      elementControl: {
        jan: true
      },
      anim: {}
    }
  },
  mounted () {
    for (const monthEl of this.monthList) {
      this.setAnimation(monthEl)
      if (monthEl !== 'jan') this.elementControl[monthEl] = false
    }
    setTimeout(() => {
      this.clickable = true
    }, 5000)
  },
  methods: {
    async next () {
      if (!this.clickable) return
      this.clickable = false
      this.contentIndex = this.contentIndex === 1 ? 0 : 1
      if (this.contentIndex === 0) this.monthIndex += 1

      if (this.contentIndex === 1) {
        const first = this.$refs[this.monthList[this.monthIndex]]
        const sec = this.$refs[this.monthList[this.monthIndex] + '2']
        first.classList.remove('init')
        first.classList.remove('appear')
        first.classList.add('leave')
        sec.classList.add('appear')
      } else {
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

      // if (this.monthIndex === 1 && this.contentIndex === 1) {
      //   this.returnToJan()
      // }
      await this.wait(1500)
      this.clickable = true
    },
    setAnimation (month) {
      let data = require(`@/assets/Animation/Story/${month}.json`)
      console.log(month)
      this.anim[month] = lottie.loadAnimation({
        container: this.$refs[month],
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: data
      })
      data = require(`@/assets/Animation/Story/${month}_2.json`)
      this.anim[month + '2'] = lottie.loadAnimation({
        container: this.$refs[month + '2'],
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: data
      })
      this.anim[month].addEventListener('DOMLoaded', () => { console.log('complete') })
      this.anim[month + '2'].addEventListener('DOMLoaded', () => { console.log('complete') })
    },
    async wait (ms) {
      return new Promise(resolve => {
        setTimeout(resolve, ms)
      })
    },
    returnToJan () {
      this.returning = setInterval(async () => {
        this.monthIndex -= 1
        console.log('#' + this.monthList[this.monthIndex] + '2')
        const sec = document.querySelector('#' + this.monthList[this.monthIndex] + '2')
        sec.classList.remove('leave')
        sec.style.transition = 'all .5s ease-in-out'
        this.$refs.stcon.style.background = this.color[this.monthIndex]
        await this.wait(400)
        sec.style.transition = ''
        const first = document.querySelector('#' + this.monthList[this.monthIndex])
        if (this.monthList[this.monthIndex] === 'jan') {
          first.classList.remove('leave')
          first.classList.add('appear')
          clearInterval(this.returning)
          return
        }
        first.classList.remove('leave')
        first.style.transition = 'all .5s ease-in-out'
        await this.wait(500)
        first.style.transition = ''
      }, 3000)
    }
  }
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
}

.story-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  -webkit-transition: background 2s ease;
  transition: background 2s ease;
}

</style>
