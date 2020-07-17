<style>
@import '../static/css/style.css';
</style>

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
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

