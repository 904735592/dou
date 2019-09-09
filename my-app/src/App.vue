<template>
  <div id="app">
    

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html{
    font-size: 26.67vw;
  }
  body,h1,h2,h3,h4,h5,h6,p,ul,ol,dl,dd,input,textarea,select,td,th{
	margin:0;
	padding:0;
}
a{
	text-decoration: none;
}
ul,ol{
	list-style: none;
}
img{
	border: none;
	display: block;
}
</style>
