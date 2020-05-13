<template>
  <div id="story-section" :style="{ background: color[month] }" class="d-flex justify-content-center">
    <div :class="['s-indicator', monthList[month]]">
      <div class="s-dot"></div>
      <div class="s-dot"></div>
      <div class="s-dot"></div>
      <div class="s-dot"></div>
      <div class="s-dot"></div>
      <div class="s-dot"></div>
      <div class="s-dot"></div>
      <div class="s-dot"></div>
      <div class="s-dot"></div>
      <div class="s-dot"></div>
      <div class="s-dot"></div>
      <div class="s-dot"></div>
    </div>

    <div @click="prevMonth()" class="left-circle story-circle"></div>
    <div @click="nextMonth()" class="right-circle story-circle"></div>
    <img ref="imageContent" class="middle-circle story-circle" :src="require(`@/assets/img/Home/Story/${monthList[month]}.png`)" alt="" srcset="">

    <router-link
      :to="{name: 'Story'}"
      class="seemore text-center"
      tag="a">
      WANT TO KNOW US MORE
    </router-link>
    <NextButton @click.native="nextSection()" class="next-button" />
  </div>
</template>

<script>
import NextButton from '@/components/icons/NextButton.vue'
export default {
  components: {
    NextButton
  },
  data () {
    return {
      month: 0,
      monthList: [
        'jan', 'feb', 'mar', 'apr', 'may', 'jun',
        'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
      ],
      color: [
        '#F8B978', '#84CFF2', '#C74B4B', '#F7C6D3',
        '#EC6B6A', '#7E6EAF', '#F7BF5D', '#69AF71',
        '#8D6039', '#F8D58E', '#99C989', '#F8D0DA',
        '#AEE0F4'
      ],
      navbg: [
        '#458D5F', '#2D69A3', '#3E793F', '#638545',
        '#68B177', '#8BC17A', '#E76552', '#2D5D35',
        '#E8D995', '#A83133', '#D64648', '# F77981'
      ]
    }
  },
  methods: {
    nextSection () {
      console.log('next!')
      this.$emit('nextpage', 3)
    },
    async prevMonth () {
      if (this.month > 0) {
        this.$refs.imageContent.classList.add('leave-p')
        await this.wait(2000)
        this.month -= 1
        document.querySelector('#home-navbar').style.background = this.navbg[this.month]
        this.$refs.imageContent.classList.remove('leave-p')
        this.$refs.imageContent.classList.add('appear-p')
        await this.wait(2000)
        this.$refs.imageContent.classList.remove('appear-p')
      }
    },
    async nextMonth () {
      if (this.month < 11) {
        this.$refs.imageContent.classList.add('leave')
        await this.wait(2000)
        this.month += 1
        document.querySelector('#home-navbar').style.background = this.navbg[this.month]
        this.$refs.imageContent.classList.remove('leave')
        this.$refs.imageContent.classList.add('appear')
        await this.wait(2000)
        this.$refs.imageContent.classList.remove('appear')
      }
    },
    async wait (ms) {
      return new Promise(resolve => {
        setTimeout(resolve, ms)
      })
    }
  },
  mounted () {
    this.$refs.imageContent.style.setProperty('--left', `${((window.innerWidth / 2) - this.$refs.imageContent.width / 2)}px`)
    window.addEventListener('resize', () => {
      // We execute the same script as before
      this.$refs.imageContent.style.setProperty('--left', `${((window.innerWidth / 2) - this.$refs.imageContent.width / 2)}px`)
    })
  },
  destroyed () {
    window.removeEventListener('resize', () => {
      // We execute the same script as before
      this.$refs.imageContent.style.setProperty('--left', `${((window.innerWidth / 2) - this.$refs.imageContent.width / 2)}px`)
    })
  }
}
</script>

<style scoped>
.next-button {
  position: absolute;
  bottom: 0;
  cursor: pointer;
}

#story-section {
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
  background-position: center top;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 90;
  transition: all 1s ease;
}

.seemore {
  position: absolute;
  bottom: 8%;
  font-size: 12px;
  margin: 25px auto;
  display: block;
  /* width: 300px; */
  align-self: center;
  padding: 10px 20px;
  color: white;
  border: white solid 1px;
  border-radius: 15px;
  font-family: 'YoungSerif';
}

.s-indicator {
  position: absolute;
  top: 15%;
  z-index: 99;
}

.s-indicator .s-dot {
  height: 10px;
  width: 10px;
  display: inline-block;
  margin: 5px;
  border-radius: 50%;
  background: #F7E7AD;
  transition: all 1s ease;
}

.s-indicator.jan .s-dot:nth-child(1) {
  background: #EE7324;
  opacity: 1;
}

.s-indicator.feb .s-dot:nth-child(2) {
  background: #2D69A3;
  opacity: 1;
}

.s-indicator.mar .s-dot:nth-child(3) {
  background: #7EBE86;
  opacity: 1;
}

.s-indicator.apr .s-dot:nth-child(4) {
  background: #638545;
  opacity: 1;
}

.s-indicator.may .s-dot:nth-child(5) {
  background: #B73635;
  opacity: 1;
}

.s-indicator.jun .s-dot:nth-child(6) {
  background: #82D879;
  opacity: 1;
}

.s-indicator.jul .s-dot:nth-child(7) {
  background: #588960;
  opacity: 1;
}

.s-indicator.aug .s-dot:nth-child(8) {
  background: #588960;
  opacity: 1;
}

.s-indicator.sep .s-dot:nth-child(9) {
  background: #517638;
  opacity: 1;
}

.s-indicator.oct .s-dot:nth-child(10) {
  background: #A83133;
  opacity: 1;
}

.s-indicator.nov .s-dot:nth-child(11) {
  background: #C33335;
  opacity: 1;
}

.s-indicator.dec .s-dot:nth-child(12) {
  background: #F77981;
  opacity: 1;
}

.story-circle {
  height: 50vh;
  width: 50vh;
  position: absolute;
  top: 25%;
  border: white solid 1px;
  border-radius: 50%;
}

.left-circle.story-circle {
  left: -15%;
  cursor: pointer;
}
.right-circle.story-circle {
  right: -15%;
  cursor: pointer;
}

.middle-circle.story-circle {
  border: none;
  z-index: 99;
}

.middle-circle.story-circle.leave {
  animation: 2s ease-in-out 0s leave forwards;
}

.middle-circle.story-circle.leave-p {
  animation: 2s ease-in-out 0s leave-p forwards;
}

.middle-circle.story-circle.appear-p {
  animation: 2s ease-in-out 0s appear-p forwards;
}

.middle-circle.story-circle.appear {
  animation: 2s ease-in-out 0s appear forwards;
}

@keyframes leave {
  from {
    left: calc(var(--left, auto));
  }
  to {
    transform: scale(0.8);
    opacity: 0;
    left: -15%;
  }
}

@keyframes leave-p {
  from {
    right: calc(var(--left, auto));
  }
  to {
    right: -15%;
    transform: scale(0.8);
    opacity: 0;
  }
}

@keyframes appear-p {
  from {
    transform: scale(0.8);
    opacity: 0;
    left: -15%;
  }
  to {
    left: calc(var(--left, auto));
  }
}

@keyframes appear {
  from {
    right: -15%;
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    right: calc(var(--left, auto));
    transform: 1;
    opacity: 1;
  }
}
</style>
