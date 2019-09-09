<template>
    <div>
       
           <router-link to="/shouye">豆瓣</router-link>
           
       
    </div>
</template>
<script>
import shouye from '../pages/shouye'
export default {
    
}
</script>
<style scoped>
    div{
        position: relative;
    }
 
    a{
        position: absolute;
        display: inline-block;
        top :0;
        left: 0;
        width: .6rem;
        font-size: 0.26rem;
        cursor: pointer;
        color:#05b512;
        text-decoration: none;
    }
</style>