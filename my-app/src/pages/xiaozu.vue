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
    <log></log>
    
    <div class="f-z">
        <h3 class="h-3">租房找室友</h3>
        <fangzu :text='arr'></fangzu>
        <h1 class="h-1">更多相关小组</h1>
        <h3 class="h-3">来聊五块钱</h3>
        <fangzu :text='arrs'></fangzu>
        <h1 class="h-1">来聊五块钱</h1>
        <h3 class="h-3">买买买</h3>
        <fangzu :text='arra'></fangzu>
        <h1 class="h-1">更多相关小组</h1>
    </div>

    <men></men>
    
</div>
    
</template>
<script>
import dou from '../components/dou'
import routerlink from '../components/routerlink'
import susuo from '../components/susuo'
import log from '../components/log'
import fangzu from '../components/fangzu'
import men from '../components/men'
export default {
    components:{
        routerlink,
        dou,
        susuo,
        log,
        fangzu,
        men
    } ,
    data(){
        return{
            arr:[],
            arrs:[],
            arra:[]
        }
    },
    created(){
       this.axios({
                method:"get",
                url:"/xiaozua"
            }).then((data)=>{  
                  
                this.arr=data.data.xiaozua;
            })
        this.axios({
            method:"get",
            url:"/xiaozub"
        }).then((data)=>{
            
            this.arrs=data.data.xiaozub;
           
        })
        this.axios({
            method:"get",
            url:"/xiaozuc"
        }).then((data)=>{
            
            this.arra=data.data.xiaozuc;
            
        })
        
    },
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
    .h-3{
        padding-top: .33rem;
        font-size: .16rem;
        color: #111;
    } 
    .f-z{
        width: 90%;
        margin: 0 auto;
    }
    .h-1{
        font-size: .16rem;
        color: #42bd56;
        padding-top: .18rem;
        padding-bottom: .45rem;
        width: 100%;
        text-align: center;
    }

</style>