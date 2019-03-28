<template>
  <div id="app">
 <!--   <img src="./assets/logo.png">-->
 	
    <router-view/>
   <!-- margin-bottom: 500px;-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/

body,h1,h2,h3,h4,h5,h6,ul,li,p{
	margin: 0;
	padding: 0;
}

.main{
	width: 752px;
}

html,body{overflow:hidden;overflow-y:auto;}

.mul2{
	display: flex;
}

.mul2>li{
	text-align: center;
}

.mul2 img{
	margin-top: 20px;
	width: 52px;
}

.mul2 a{
	display: inline-block;
}

</style>
