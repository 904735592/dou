<template>
<div>
    <div class="header">
        <dou></dou>
        <div class="link">
           <routerlink></routerlink> 
           <susuo></susuo>
        </div>   
    </div>
    <div class="box"></div>
    <imgs></imgs>
    <log></log>
    <min></min>
    <h4 class="h-4">显示更多广播</h4>
    <men></men>
</div>
    
    
</template>
<script>
import dou from '../components/dou'
import routerlink from '../components/routerlink'
import susuo from '../components/susuo'
import imgs from '../components/imgs'
import log from '../components/log'
import min from '../components/min'
import men from '../components/men'
export default {
    components:{
        routerlink,
        dou,
        susuo,
        imgs,
        log,
        min,
        men
    }
}    
</script>
<style scoped>
    .header{
        height:0.58rem;
        line-height: 0.58rem;
        border-bottom: 1px solid #f3f3f3;
        display: flex;
        justify-content: space-between;
        margin: 0 5px;
        position: fixed;
        top: 0px;
        left: 0;
        width: 100%;
        background: #fff;
        z-index: 100;
        
    }
    .box{
        padding-top: .58rem;
    }
    .link{
        font-size: 0.16rem;
        display: flex;
        align-items: center;
    }   
    .h-4{
        width: 100%;
        text-align: center;
        padding-top: .5rem;
        font-size: 14px;
        color: #06c112;
    }
</style>