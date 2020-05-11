<template>
  <div class="story-container" ref="stcon">
    <div @click="next" class="click-aria"></div>
    <div class="month-elements first init" v-if="monthIndex < 3" id="jan"></div>
    <div class="month-elements second" v-if="monthIndex < 3" id="jan2"></div>
    <div class="month-elements first" v-if="monthIndex < 4" id="feb"></div>
    <div class="month-elements second" v-if="monthIndex < 4" id="feb2"></div>
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
import '@/assets/css/story.css'

export default {
  data () {
    return {
      clickable: false,
      monthList: ['jan', 'feb', 'mar'],
      monthIndex: 0,
      contentIndex: 0,
      color: [
        '#F8B978', '#84CFF2', '#C74B4B', '#F7C6D3',
        '#EC6B6A', '#7E6EAF', '#F7BF5D', '#69AF71',
        '#F7EBAE', '#F8D58E', '#99C989', '#F8D0DA',
        '#AEE0F4'
      ]
    }
  },
  mounted () {
    this.setAnimation('jan')
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
        const first = document.querySelector('#' + this.monthList[this.monthIndex])
        const sec = document.querySelector('#' + this.monthList[this.monthIndex] + '2')
        first.classList.remove('init')
        first.classList.remove('appear')
        first.classList.add('leave')
        sec.classList.add('appear')
      } else {
        const sec = document.querySelector('#' + this.monthList[this.monthIndex - 1] + '2')
        sec.classList.remove('appear')
        sec.classList.add('leave')
        this.setAnimation(this.monthList[this.monthIndex])
        this.$refs.stcon.style.background = this.color[this.monthIndex]
        const fcontent = document.querySelector('#' + this.monthList[this.monthIndex])
        fcontent.classList.add('appear')
      }

      // if (this.monthIndex === 1 && this.contentIndex === 1) {
      //   this.returnToJan()
      // }
      await this.wait(1500)
      this.clickable = true
    },
    setAnimation (month) {
      console.log(month)
      let data = require(`@/assets/Animation/Story/${month}.json`)
      // eslint-disable-next-line no-undef
      bodymovin.loadAnimation({
        container: document.getElementById(month),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: data
      })
      data = require(`@/assets/Animation/Story/${month}_2.json`)
      // eslint-disable-next-line no-undef
      bodymovin.loadAnimation({
        container: document.getElementById(`${month}2`),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: data
      })
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
  background: #F8B978;
  -webkit-transition: all 2s ease;
  transition: all 2s ease;
}

</style>
