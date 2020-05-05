<template>
  <div id="app">
    <transition name="fade" appear>
      <v-touch
        @pan="event => onScroll(event, 'handswipe')"
      >
        <div ref="canvas" class="canvas" id="box" :style="canvasStyle">
          <!-- <h2>{{ cursor }}</h2> -->
          <div ref="inner" @mousemove="update" :style="innerCanvasStyle" class="inner-canvas">
            <img class="title" :style="titleStyle.jan.first" src="https://drive.google.com/uc?id=1cR4RJp7mwVo09mX2jiJEBvYyXk8cSd5V" />
            <img class="title" :style="titleStyle.jan.sec" src="https://drive.google.com/uc?id=1u4pNH9XLWaGKnPIKwW5sHxNZGeF4R3qO" />
            <img class="title" :style="titleStyle.feb.first" src="https://drive.google.com/uc?id=1h4YDCUbuZ30vfl9Nsw5nCvFwkLOqdzgD" />
            <img class="title" :style="titleStyle.feb.sec" src="https://drive.google.com/uc?id=156riSS2MMTYL6o4ajKXate7D3jj_oUAo" />
            <img class="title" :style="titleStyle.mar.first" src="https://drive.google.com/uc?id=1oNhj9wQLY3pbnCggd6GuNyC7PgA404IR" />
            <img class="title" :style="titleStyle.mar.sec" src="https://drive.google.com/uc?id=1PgXcDVjJGBuD8aubnoqSyaHoCpcqe-dJ" />
            <img class="title" :style="titleStyle.apr.first" src="https://drive.google.com/uc?id=1zAIuQgSLneiNNabHh32w5VzyaX_daFOP" />
            <img class="title" :style="titleStyle.apr.sec" src="https://drive.google.com/uc?id=1OBENRNfcEP5gCt85H9jTjzxFe5llbJY4" />
            <img class="title" :style="titleStyle.may.first" src="https://drive.google.com/uc?id=12V5eZ3s_1aImM1A3Zjvl8DgHpLWIPhas" />
            <img class="title" :style="titleStyle.may.sec" src="https://drive.google.com/uc?id=1bydvnZzNSiGlnaacEJHicIQN8M933I7e" />
            <img class="title" :style="titleStyle.jun.first" src="https://drive.google.com/uc?id=14_jRFL3T8waZyyLYg-fhW46tbFxc2pYQ" />
            <img class="title" :style="titleStyle.jun.sec" src="https://drive.google.com/uc?id=12Mb52-T6UnIWoZ1u2QAFmXt1hHWOlAg5" />
            <img class="title" :style="titleStyle.jul.first" src="https://drive.google.com/uc?id=153Ntj3i5BaTZe32Quu37pNnGvNANH6UP" />
            <img class="title" :style="titleStyle.jul.sec" src="https://drive.google.com/uc?id=1OTQCog7ncQpdQ4DoF2O29J_qRt8csKQc" />
            <img class="title" :style="titleStyle.aug.first" src="https://drive.google.com/uc?id=1Tonr2oRzAknJwMU5HcR2yBSaO5HvqqsI" />
            <img class="title" :style="titleStyle.aug.sec" src="https://drive.google.com/uc?id=1_BFLrajxDMBtS0IRlzim9bYnydWCUCyQ" />
            <img class="title" :style="titleStyle.sep.first" src="https://drive.google.com/uc?id=1ZNf_9x3y4p-N68Hesv8OclsVdYIjecev" />
            <img class="title" :style="titleStyle.sep.sec" src="https://drive.google.com/uc?id=1jr1EPRkq8r6UYwiOUhC5wm-RAXW2bnwo" />
            <img class="title" :style="titleStyle.oct.first" src="https://drive.google.com/uc?id=1OVWiiDkUgb1C7MDb8wi193SzqGyQfuK9" />
            <img class="title" :style="titleStyle.oct.sec" src="https://drive.google.com/uc?id=17YnDXNHSp6v8uskMFarvleUMua0DCIra" />
            <img class="title" :style="titleStyle.nov.first" src="https://drive.google.com/uc?id=1yTtj4hEM1eG-K0Y54OeaR_W9oGPvOmpf" />
            <img class="title" :style="titleStyle.nov.sec" src="https://drive.google.com/uc?id=1qRvqhToVAd1vkZUeJAio-yeXq2KtUAuY" />
            <img class="title" :style="titleStyle.dec.first" src="https://drive.google.com/uc?id=1KZwwleFATwP5zfn5hYq1zSjC2UOekh9C" />
            <img class="title" :style="titleStyle.dec.sec" src="https://drive.google.com/uc?id=1vAFr9BiWrQ4m1FzxcEnLDhcvqc9s-1I4" />
            <img class="title end" :style="titleStyle.end.first" :src="require('@/assets/img/Story/nextyear.png')" alt="">
            <img @click="toJan" class="title return" :style="titleStyle.end.return" :src="require('@/assets/img/Story/return.png')" alt="">
          </div>
        </div>
      </v-touch>
    </transition>
     <div :class="['three-dot', 'left', month]">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <div :class="['three-dot', 'right', month]">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
}

img {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.canvas {
  perspective: 40px;
  height: 100vh;
  overflow: hidden;
  transition: all 1s;
}

.inner-canvas {
  position: relative;
  height: 100%;
  transition: all 0.5s;
}

.end {
  transform: translate(-50%, -120%) !important;
}

.return {
  cursor: pointer;
  transform: translate(-50%, 0%) !important;
}

.title {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: none;
  transition-timing-function: none;
}

</style>

<script>
export default {
  data () {
    return {
      cursor: 0,
      month: 'jan',
      canvasStyle: {
        backgroundColor: '#F8B978'
      },
      titleStyle: {
        jan: {
          first: { width: '0%' },
          sec: { width: '0%' }
        },
        feb: {
          first: { width: '0%' },
          sec: { width: '0%' }
        },
        mar: {
          first: { width: '0%' },
          sec: { width: '0%' }
        },
        apr: {
          first: { width: '0%' },
          sec: { width: '0%' }
        },
        may: {
          first: { width: '0%' },
          sec: { width: '0%' }
        },
        jun: {
          first: { width: '0%' },
          sec: { width: '0%' }
        },
        jul: {
          first: { width: '0%' },
          sec: { width: '0%' }
        },
        aug: {
          first: { width: '0%' },
          sec: { width: '0%' }
        },
        sep: {
          first: { width: '0%' },
          sec: { width: '0%' }
        },
        oct: {
          first: { width: '0%' },
          sec: { width: '0%' }
        },
        nov: {
          first: { width: '0%' },
          sec: { width: '0%' }
        },
        dec: {
          first: { width: '0%' },
          sec: { width: '0%' }
        },
        end: {
          first: { width: '0%' },
          return: { width: '0%' },
          sec: { width: '0%' }
        }
      },
      innerCanvasStyle: {},
      monthList: [
        'jan',
        'feb',
        'mar',
        'apr',
        'may',
        'jun',
        'jul',
        'aug',
        'sep',
        'oct',
        'nov',
        'dec',
        'end'
      ]
    }
  },
  mounted () {
    console.log(this.month)
    window.addEventListener('mousewheel', event => this.onScroll(event, 'mousewheel'))
  },
  computed: {
    cursorRange () {
      const txt = Math.floor(this.cursor) + ''
      if (txt.length === 1) return 0
      return txt.charAt(txt.length - 2)
    }
  },
  methods: {
    titleAnimate (type) {
      console.log('1 ===================')
      if (type === 'mousewheel') {
        this.titleStyle[this.month].first['transition-timing-function'] = 'ease-in-out'
        this.titleStyle[this.month].first.transition = 'all 0.5s'
        this.titleStyle[this.month].sec['transition-timing-function'] = 'ease-in-out'
        this.titleStyle[this.month].sec.transition = 'all 0.5s'
        if (this.month === 'end') {
          this.titleStyle[this.month].return['transition-timing-function'] = 'ease-in-out'
          this.titleStyle[this.month].return.transition = 'all 0.5s'
        }
      } else {
        this.titleStyle[this.month].first['transition-timing-function'] = 'none'
        this.titleStyle[this.month].first.transition = 'none'
        this.titleStyle[this.month].sec['transition-timing-function'] = 'none'
        this.titleStyle[this.month].sec.transition = 'none'
        if (this.month === 'end') {
          this.titleStyle[this.month].return['transition-timing-function'] = 'none'
          this.titleStyle[this.month].return.transition = 'none'
        }
      }
      console.log('2 ===================')
      // sizing
      const size = this.cursor - (this.monthList.indexOf(this.month)) * 200
      this.titleStyle[this.month].first.width = size * 1.1 + '%'
      this.titleStyle[this.month].sec.width = (size - 100) * 1.1 + '%'

      if (this.month === 'end') {
        this.titleStyle[this.month].return.width = size * 0.3 + '%'
      }
      console.log('3 ===================')
      // opacity
      if (this.cursor < (this.monthList.indexOf(this.month) + 1) * 200 - 100 &&
        this.cursor >= (this.monthList.indexOf(this.month)) * 200
      ) {
        this.titleStyle[this.month].first.opacity = 1
      } else {
        console.log('must remove the first')
        this.titleStyle[this.month].first['transition-timing-function'] = 'ease-in-out'
        this.titleStyle[this.month].first.transition = 'all 0.5s'
        this.titleStyle[this.month].first.opacity = 0
      }

      console.log('4 ===================')
      console.log(this.cursor)
      console.log(this.monthList.indexOf(this.month))
      console.log((this.monthList.indexOf(this.month) + 1) * 200)
      if (this.cursor < (this.monthList.indexOf(this.month) + 1) * 200 &&
      this.cursor >= (this.monthList.indexOf(this.month) + 1) * 200 - 100) {
        this.titleStyle[this.month].sec.opacity = 1
      } else {
        console.log('must remove the second')
        this.titleStyle[this.month].sec['transition-timing-function'] = 'ease-in-out'
        this.titleStyle[this.month].sec.transition = 'all 0.5s'
        this.titleStyle[this.month].sec.opacity = 0
      }
    },
    update (e) {
      const container = this.$refs.canvas
      const inner = this.$refs.inner
      const mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function (event) {
          var e = event || window.event
          this.x = e.clientX - this._x
          this.y = (e.clientY - this._y) * -1
        },
        setOrigin: function (e) {
          this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2)
          this._y = e.offsetTop + Math.floor(e.offsetHeight / 2)
        },
        show: function () { return '(' + this.x + ', ' + this.y + ')' }
      }

      mouse.setOrigin(container)
      mouse.updatePosition(e)

      const updateTransformStyle = (x, y) => {
        const style = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)'
        this.innerCanvasStyle.transform = style
        this.innerCanvasStyle.webkitTransform = style
        this.innerCanvasStyle.mozTransform = style
        this.innerCanvasStyle.msTransform = style
        this.innerCanvasStyle.oTransform = style
      }

      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
      )
      this.$forceUpdate()
    },
    onScroll (e, type) {
      const color = [
        '#F8B978', '#84CFF2', '#C74B4B', '#F7C6D3',
        '#EC6B6A', '#7E6EAF', '#F7BF5D', '#69AF71',
        '#F7EBAE', '#F8D58E', '#99C989', '#F8D0DA',
        '#AEE0F4'
      ]
      if (type === 'mousewheel') {
        const delta = Math.max(-1, Math.min(1, e.wheelDelta))
        if (delta === -1) {
          this.cursor += 2.5
          if (this.cursor > 2570) this.cursor = 2599
        } else {
          this.cursor -= 2.5
          if (this.cursor < 1) this.cursor = 0
        }
      } else if (type === 'handswipe') {
        const direction = e.additionalEvent === 'panup' ? -1
          : e.additionalEvent === 'pandown' ? 1 : 0
        if (direction === -1) {
          this.cursor += 1
          if (this.cursor > 2570) this.cursor = 2599
        } else {
          this.cursor -= 1
          if (this.cursor < 1) this.cursor = 0
        }
      }
      this.canvasStyle.backgroundColor = color[Math.floor(this.cursor / 200)]
      this.titleAnimate(type) // calculate title size
      console.log('month index', Math.floor(this.cursor / 200))
      this.month = this.monthList[Math.floor(this.cursor / 200)]
    },
    toJan () {
      const color = [
        '#F8B978', '#84CFF2', '#C74B4B', '#F7C6D3',
        '#EC6B6A', '#7E6EAF', '#F7BF5D', '#69AF71',
        '#F7EBAE', '#F8D58E', '#99C989', '#F8D0DA',
        '#AEE0F4'
      ]
      this.titleStyle.end.return.opacity = 0
      this.timer = setInterval(() => {
        this.cursor -= 20
        if (this.cursor < 100) this.cursor = 50
        this.canvasStyle.backgroundColor = color[Math.floor(this.cursor / 200)]
        this.titleAnimate('mousewheel') // calculate title size
        console.log('month index', Math.floor(this.cursor / 200))
        this.month = this.monthList[Math.floor(this.cursor / 200)]
      }, 100)
    }
  },
  watch: {
    cursor (val) {
      if (val < 100) {
        this.canvasStyle.backgroundColor = '#F8B978'
        console.log('remove interval')
        clearInterval(this.timer)
      }
    }
  }
}
</script>
