<template>
  <div id="app">
    <v-touch
      @pan="event => onScroll(event, 'handswipe')"
    >
      <div ref="canvas" class="canvas" id="box" :style="canvasStyle">
        <!-- <h2>{{ cursor }}</h2> -->
        <div ref="inner" v-on:mousemove="update" :style="innerCanvasStyle" class="inner-canvas">
          <img class="title" :style="titleStyle" :src="require('./assets/title.png')" />
        </div>
      </div>
    </v-touch>
  </div>
</template>

<style>
body {
  margin: 0;
}

html, body {
  overflow: hidden;
  font-family: Georgia,Times,Times New Roman,serif;
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
      cursor: 1,
      canvasStyle: {
        backgroundColor: '#FBC326'
      },
      titleStyle: {
        'max-width': '0%',
        /* transition: all 0.5s, */
        /* transition-timing-function: ease-in-out; */
        opacity: 1
      },
      innerCanvasStyle: {}
    }
  },
  mounted () {
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
      if (type === 'mousewheel') {
        this.titleStyle['transition-timing-function'] = 'ease-in-out'
        this.titleStyle.transition = 'all 0.5s'
      } else {
        this.titleStyle['transition-timing-function'] = 'none'
        this.titleStyle.transition = 'none'
      }
      // sizing
      const size = this.cursor
      this.titleStyle['max-width'] = size * 1.1 + '%'

      // opacity
      if (this.cursor < 100) {
        this.titleStyle.opacity = 1
      } else {
        this.titleStyle['transition-timing-function'] = 'ease-in-out'
        this.titleStyle.transition = 'all 0.5s'
        this.titleStyle.opacity = 0
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
      const color = ['#FBC326', 'green', 'blue']
      console.log('mousewheel')
      if (type === 'mousewheel') {
        const delta = Math.max(-1, Math.min(1, e.wheelDelta))
        if (delta === -1) {
          this.cursor += 5
        } else {
          this.cursor -= 5
          if (this.cursor < 1) this.cursor = 1
        }
      } else if (type === 'handswipe') {
        console.log(e)
        const direction = e.additionalEvent === 'panup' ? -1
          : e.additionalEvent === 'pandown' ? 1 : 0
        if (direction === -1) {
          this.cursor += 0.5
        } else {
          this.cursor -= 0.5
          if (this.cursor < 1) this.cursor = 1
        }
      }
      this.canvasStyle.backgroundColor = color[Math.floor(this.cursor / 100)]
      this.titleAnimate(type) // calculate title size
    }
  }
}
</script>
