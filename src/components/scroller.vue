<template>
<div id="infiniteScroll">
  <div>
    <h2>{{msg}}</h2>
  </div>

  <div class="scroll-wrapper">
    <div v-for="(elem,ielem) in list">
      elem : {{elem.name}}
    </div>
  </div>
</div>
</template>

<script>
import list from './data.js'

export default {
  name: 'infiniteScroll',
  data() {
    return {
      msg: 'Infinite Scroll',
      list
    }
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
