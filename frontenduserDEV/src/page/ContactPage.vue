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
	width:100%;
	height:100vh;
	position:absolute;
	top:15%;
}
#paper-page div{
	display:inline-block;
	width:50%;
	height:35%;
	border:1px solid black;
}
</style>