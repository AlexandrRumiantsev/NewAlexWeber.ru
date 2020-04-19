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

#name_form{
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
}



#sbm-elem:before, 
#sbm-elem:after {
  content: "Отправить";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
#sbm-elem:before{
  content: "wait..";
  transform: translateX(-100%);
  background: #000;
  transition: transform .3s cubic-bezier(.55,.055,.675,.19);
  color:white;
}
#sbm-elem:after {
  background: #413ad5;
  transform: translateX(100%);
  transition: transform .3s cubic-bezier(.16,.73,.58,.62) .3s;
}
#sbm-elem:hover:before,
#sbm-elem:hover:after {transform: translateX(0);}
#sbm-elem{
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 200px;
    color: black;
    padding: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5); 
    margin-left: 20px;
    background: white;
}
#sbm-elem:after , #sbm-elem:hover:before{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    display: flex;
    vertical-align: middle;
    align-content: center;
    align-items: center;
    justify-content: center;
    color: white;
 }   


#comment_add textarea{
    padding: 30px 45px;
  width: 500px;
    height: 200px;
     outline:none;
}
#comment_add textarea:focus{
  border-color:#bee5eb;
}
#comment_add input{
   box-shadow: 0 0 10px rgba(0,0,0,0.5); 
   border:none;
   padding:3px;
   outline:none;
}
#comment_add{
  
}
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
  position:relative;

}
.container-comment__sbm{
  
}
.container-comment__form div{
      display: flex;
    padding: 10px;
    align-items: center;
}
.container-comment__form{
 border-radius: 5px;
    padding: 10px;
    margin: 10px;
    width: fit-content;
    text-align: center;
    bottom: 25px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 20px auto;
    background: #edeef0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
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
    top:10%;
	color: black;
    width: 100%;
    z-index: 999999999;
    position: absolute;
    left: 0;
    height: 100%;
    top: 30px;
    display: flex;

}	
.container-comment__content{
height: fit-content;
 box-shadow: 0 0 10px rgba(0,0,0,0.5); 
      width: 900px;
    margin: 0 auto;
    background: white;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 45px;
}

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
       this.addComments(
          data
       );
    },
    close(){
       console.log(this.$el.style.cssText = '');
    }
  }
}  
</script>