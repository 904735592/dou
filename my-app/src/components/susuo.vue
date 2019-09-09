<template>
    <div>
        <router-link to="/feilei">
            <img @click="fun()" src="../../build/susuo.jpg" >
        </router-link>
        
        
    </div>
</template>
<script>
import feilei from './feilei'
export default {
   
}
</script>
<style scoped>
    img{
        width: .28rem;
        height: .22rem;
        margin-right: 8px;
    }
</style>