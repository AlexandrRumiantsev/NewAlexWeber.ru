import modules from './modules'
import Vue from 'vue'

<template>
  	<div class='container-comment'>
      <div class='container-comment__content'>
            <div class='container-comment__header'>
      		    <div>Статья: </div>
      		    <div>{{postData}}</div>
              <span class='close-btn' @click="close"> 
                <img src='http://localhost:8080/img/close-icon.png'>
              </span>
            </div>
            <div v-for="n in allComments" v-bind:key='n.id'>
                <div v-if="n.paper === postData" class='container-comment__item'>
                    <div class='container-comment__time'>
                      {{n.time}}  {{n.user}}:
                    </div>
                    <div class='container-comment__tiitle'>
                      {{n.title}}
                    </div>
                </div>
            </div>
            <div class='container-comment__form'>
              <div class='container-comment__input'>
                Имя:<input type='text'>
              </div>
              <div class='container-comment__input'>
                Комментарий<textarea></textarea>
              </div>
              <div class='container-comment__sbm'>
                <input value='Написать' type='submit'>
              </div>
            </div>
       </div>     
	   </div>
</template>

<style scoped>
.close-btn img{
position: absolute;
    width: 35px;
    margin: 10px;
    right: -50px;
    top: -50px;
}
.container-comment__form textarea , .container-comment__form input{
  margin:10px;
}
.container-comment__input{
  
}
.container-comment__sbm{
  
}
.container-comment__form div{
      display: flex;
    padding: 10px;
    align-items: center;
}
.container-comment__form{
 text-align: center;
    bottom: 25px;
   align-items: center;
    margin: 0 auto;
    background: #edeef0;
    padding: 25px;
    display:flex;
    justify-content: center;
}
.container-comment__item{
  background: #edeef0;
    width: 90%;
    margin: 10px auto;
    text-align: left;
    
    padding: 10px;
}
.container-comment__header{
 font-size:20px;
  position:relative;
  display:flex;
  margin:45px;
}
.container-comment__header div{
  padding:5px;
}
.container-comment__header button{
  position: absolute;
  top: 5px;
  right: 5px;
}
.container-comment{
	color: black;
    background: #edeef0;
    width: 100%;
    z-index: 99999;
    position: absolute;
    left: 0;
    height: 100%;
    top: 0;
    display: flex;
    align-items: center;
}	
.container-comment__content{
      width: 900px;
    margin: 0 auto;
    background: white;
    border-radius: 5px;
    padding: 10px;
}

</style>


<script>
import { mapGetters , mapActions } from 'vuex'

export default {
  name: 'PaperComments',
  props: ['postData'],
  data() {
    return {
      enter: false
    };
  },
  computed: mapGetters(['allComments']),
  methods: {
    close(){
       console.log(this.$el.style.cssText = '');
    }
  }
}  
</script>