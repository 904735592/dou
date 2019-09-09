<template>
<div class="con">
    <div class="con-x">
        <zi v-for="(v,i) in sfuprops" :key="i" :zititle="v.title" :ziimgurl="v.images.large" ></zi>
    </div>
</div>
    
</template>
<script>

import zi from './zi'
export default {
    components:{
        zi
    },
    props:{
        sfuprops:{
            type:Array,
            required:true
        }
    }
}
</script>
<style scoped>
    
    .con{      
        width: 100%;
        overflow: auto;
    }
    .con-x{
        display: flex;       
    }
</style>