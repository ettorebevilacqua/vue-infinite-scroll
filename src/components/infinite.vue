<template>
<div id="infiniteScroll">

  <div>
    <h2>{{msg}}</h2>
  </div>
<div>{{buffer}}</div>
  <div class="scroll-wrapper" id="infinite-scroll-wrapper">
    <div v-for="(elem,ielem) in buffer">
      {{ielem}} elem : {{elem.name}}
    </div>
  </div>

</div>
</template>

<script>
import list from './data.js'
import Infinite from '../../core/infinite.js'

const infiniteFactor = Infinite

const idDom = 'infinite-scroll-wrapper'

export default {
  name: 'infiniteScroll',
  data() {
    return {
      list,
      msg: 'Infinite Scroll',
      idDom,
      buffer: [],
      infinite: null
    }
  },
  methods: {
    onScroll(perc, buffer) {
       this.buffer=buffer;
       this.buffer = this.buffer.splice(0, this.buffer.length)
      console.log('scroll ' + (parseInt(perc * 100) / 100))
    }
  },
  mounted() {
    this.infinite = infiniteFactor({
      idDom: this.idDom,
      onScroll: this.onScroll,
      buffer: this.buffer
    })
    this.buffer = this.infinite.refresh(this.list)
    console.log('mounted ')
  },
  computed: {
    test: () => 'ok'
  },
  // methods: { ...methods },
  created() {
    console.log('[component infinite] create', window)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#infiniteScroll {
  background-color: black;
  color: yellow;
  padding-top: 11px;
  height: 100%;
}

.scroll-wrapper {
  overflow-y: auto;
  height: 400px;
  width: 300px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
