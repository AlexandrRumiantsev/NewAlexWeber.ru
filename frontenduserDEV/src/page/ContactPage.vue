import modules from './modules'

<template>


  	<div id="paper-page">
     	<div>Статья 1</div>
		<div>Статья 1</div>
		<div>Статья 1</div>
		<div>Статья 1</div>
		<div>Статья 1</div>
		<div>Статья 1</div>
		<div>Статья 1</div>
		<div>Статья 1</div>
		<div>Статья 1</div>
		<div>Статья 1</div>
		<div>Статья 1</div>
		<div>Статья 1</div>
	</div>

</template>


<script>

import Vue from 'vue'

export default {
  name: 'ContactPage',
}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#paper-page{
	height: 100vh;
}
#paper-page div{
	display:inline-block;
	width:50%;
	height:45vh;
	border:1px solid black;
}
</style>