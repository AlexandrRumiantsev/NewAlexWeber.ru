<template>
  <div id="hello">
    <h2>{{postData}}</h2>
    <h2>{{message}}</h2>
    <iframe :src="linkFrame"></iframe>
  </div>
</template>
 
<script>
export default {
  name: 'vue',
  props: ['postData'],
  data () {
    return {
      message: 'Welcome to Vue.js',
      linkFrame: 'localhost:8080/papers/' + this.postData + '.html'
    }
  }
}
</script>
 
<style>
#hello {
  font-family: Verdana;
  color: navy;
}
</style>