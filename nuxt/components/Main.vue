import modules from './modules'

<template>
    <div id="main-page">
    <div class="content">
           <h2 class='content__sub-title'>WEB-DEVELOPER</h2>
           <h1 class='content__title'> 
            <span class='content__name'>
              АЛЕКСАНДР
            </span> 
            РУМЯНЦЕВ
          </h1>
           <div class='content__skill-box'>
                <a rel="nofollow" target="_blank" href='https://ru.vuejs.org/'>
                  <div>
                    VUE
                  </div>
                </a>
                <a rel="nofollow" target="_blank" href='https://reactjs.org/'>
                <div>
                  REACT
                </div>
                 </a>
                <a rel="nofollow" target="_blank" href='https://nodejs.org/'>
                <div>
                  NODE
                </div>
                 </a>
                <a rel="nofollow" target="_blank" href='https://developer.mozilla.org/'>
                <div>
                  Native JS
                </div>
                 </a>
                <a rel="nofollow" target="_blank" href='https://www.mongodb.com/'>
                <div>
                  MONGO
                </div>
                 </a>
           </div>
    </div>
  </div>
</template>


<script>
import Vue from 'vue'
export default {
  name: 'Main',
}  
</script>
<style scoped>
@import '../static/scss/main.scss';
</style>
