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
              <form id='comment_add' @submit="comment_add">
                <div class='container-comment__input'>
                    <input placeholder="Ваше имя?" id='name_form' name='name_form' type='text'>
                    <!--<input id='sbm-elem' value='Написать' type='submit'> -->
                    <span @click="comment_add" id='sbm-elem' >Написать</span>
                    <textarea name='comment_form'></textarea>
                </div>
              </form>
            </div>
       </div>     
	   </div>
</template>

<style scoped>
@import '../static/scss/paper/comments.scss';
</style>


<script>
import { mapGetters , mapActions } from 'vuex'
import Vue from 'vue'
export default {
  name: 'PaperComments',
  props: ['postData'],
  data() {
    return {
      enter: false,
      rerender: ''
    };
  },
  created(){
      this.feathComments();
  },
  computed: mapGetters(['allComments']),
  watch: {
    rerender: function(){
       this.refrashComments();
    }
  },
  methods: {
    ...mapActions(['addComments' , 'feathComments' , 'refrashComments']),
    comment_add(e){
       let component = this;
       e.preventDefault();
       let form = e.target.parentElement.parentElement;
       let data = {
            'name' : form.querySelector("input[name='name_form']").value ,
            'comment' : form.querySelector("textarea[name='comment_form']").value,
            'paper': this.$props.postData,
            'callbak': function(data){
               console.log('CALBACK!!');
               component.refrashComments(data); 
            }
       }
       console.log(form.querySelector("input[name='name_form']").value)
       console.log(form.querySelector("input[name='name_form']").value)
       
       if(form.querySelector("input[name='name_form']").value == ''){
          form.querySelector("input[name='name_form']").style = 'border:1px solid red;';
          alert('Заполните Имя');
       }else if(form.querySelector("textarea[name='comment_form']").value == ''){
       form.querySelector("textarea[name='comment_form']").style = 'border:1px solid red;';
        alert('Заполните Комментарий');
       }else{
         form.querySelector("input[name='name_form']").style = 'border:none';
         form.querySelector("textarea[name='comment_form']").style = 'border:none';
         this.addComments(
            data
         );
       }
       
       
       
    },
    close(){
       console.log(this.$el.style.cssText = '');
    }
  }
}  
</script>