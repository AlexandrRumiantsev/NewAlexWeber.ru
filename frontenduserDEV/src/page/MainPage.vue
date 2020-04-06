import modules from './modules'

<template>


  	<div id="main-page">
		<div class="content">
			<p>
				<span>
					 <p>АЛЕКСАНДР РУМЯНЦЕВ</p>
					 <div>ВЕБ-РАЗРАБОТЧИК</div>
				</span>
			</p>
		</div>
	</div>

</template>


<script>

import Vue from 'vue'

export default {
  name: 'MainPage',
}  
</script>

<style scoped>
#main-page{
	height: 100vh;
	width:100%;
	position:relative;
	display:flex;
	justify-content: center;
	align-items: center;
}
#main-page h1{
  width:100%;

}
#main-page h2{
	width:100%;
}


body {
  background: #090d00;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
}

p {
  border: 4px double rgba(255, 255, 255, 0.25);
  border-width: 4px 0;
  padding: 1.5em 0em;
  position: absolute;
  top: 18%;
  left: 50%;
  width: 40em;
  margin: 0 0 0 -20em;
  font-size:70px;
}
.content p div {
  font-size:20px;
  border: 4px double rgba(255, 255, 255, 0.25);
  border-width: 4px 0;
  padding: 2.5em 0em;
  position: absolute;
  top: 18%;
  left: 50%;
  width: 60em;
  margin: 0 0 0 -20em;
}
span {
  text-transform: uppercase;
  padding: .25em 0 .325em;
  display: block;
  text-shadow: 0 0 80px rgba(255, 255, 255, 0.9);
  animation: bounce-top 2s  both;
  font-family: 'Open Sans', sans-serif;
  }


@keyframes bounce-top {
  0% {
    transform: translateY(-45px);
    animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    transform: translateY(-24px);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateY(-12px);
    animation-timing-function: ease-in;
  }
  82% {
    transform: translateY(-6px);
    animation-timing-function: ease-in;
  }
  93% {
    transform: translateY(-4px);
    animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
    opacity: 1;
  }
}
</style>