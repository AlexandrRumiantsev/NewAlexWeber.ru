import modules from './modules'

<template>


  	<div>
        {{ postData.title }}
        {{ postData.discription }}
        {{ postData.link }}
        {{ postData.img }}
	</div>

</template>


<script>

import Vue from 'vue'

export default {
  name: 'PapersTemplate',
  props: ['postData'],
}  
</script>