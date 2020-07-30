<template>
  <div>ПРОЕКТ
   {{ this.$route.params.data.name }}
  </div>
   
</template>
<script>
  export default {
    layout: 'menu',
    props: ['data'],
    mounted() {
      //this.props.data = this.$route.params.data;
    },
    head() {
	    return {
	      title: this.$route.params.data.name,
	      meta: [
	        {
	          hid: 'description',
	          name: 'description',
	          content: 'description'
	        }
	      ]
	    }
  	}
  }
</script>