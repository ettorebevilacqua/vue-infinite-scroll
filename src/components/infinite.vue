<template>
<div id="infiniteScroll">

  <div>
    <h2>{{msg}}</h2>
  </div>

  <div class="scroll-wrapper" id="infinite-scroll-wrapper">
    <div v-for="(elem,ielem) in list">
      elem : {{elem.name}}
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
      scroll:null,
      counter:0,
      idDom
    }
  },
  methods: {
    onScroll(perc){
      this.counter++
      console.log('scroll '+ (parseInt( perc * 100)/100) , this.counter)
    }
  },
  mounted(){
    const infinite = infiniteFactor({idDOm:this.idDom, onScroll :this.onScroll})
    console.log('mouted ')
  },
computed: {
  test: () => 'ok'
},
// methods: { ...methods },
created() {
  console.log('[component infinite] create',window)

}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#infiniteScroll {
  background-color: black;
  color: yellow;
  padding-top: 11px;
}

.scroll-wrapper {
  overflow-y: auto;
  height: 500px;
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
