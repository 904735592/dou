<template>
<div>
    <div class="header">
        <dou></dou>
        <div class="link">
           <routerlink></routerlink> 
           <susuo></susuo>
        </div>    
    </div>
    <div class="imgs top">
        <div class="re-y">
            <h2>影院热映</h2>
            <span>更多</span>
        </div>
        <fu :sfuprops="arra"></fu>
  
        <div class="re-y">
            <h2>免费在线观影</h2>
            <span>更多</span>
        </div>
        <fu :sfuprops="arrb"></fu> 
    </div>
    <div class="imgs">
        <div class="re-y">
            <h2>发现好电影</h2>
            <span>更多</span>     
        </div>
        <div >
            <uls :tit='arrs'></uls>
        </div>
        <div class="re-y">
            <h2>分类浏览</h2>
            
        </div>
        <hf></hf>        
    </div>
    <men></men>
    
</div>    
</template>

<script>
import dou from '../components/dou'
import routerlink from '../components/routerlink'
import susuo from '../components/susuo'
import fu from '../components/silder/fu'
import uls from '../components/moob/uls'
import hf from '../components/hf'
import men from '../components/men'
export default {
    components:{
        routerlink,
        dou,
        susuo,
        fu,
        uls,
        hf,
        men
    } ,
    data(){
        return{
            arr:[],
            arrs:[]
        }
    },
    created(){
       this.axios({
                method:"get",
                url:"/moviea"
            }).then((data)=>{    
                this.arr=data.data.movie;
            })
        this.axios({
            method:"get",
            url:"/faxianhaodianying"
        }).then((data)=>{
            
            this.arrs=data.data.faxianhaodianying;
            console.log(this.arrs)
        })
        
    },
    computed:{
        arra(){
          
            var demoa=this.arr.filter((v,i)=>{
                
                    if(i<5){
                     return this.arr[i]
                    }
             
            });

            return demoa
            
        },
         arrb(){
       
            var demoa=this.arr.filter((v,i)=>{
                    if(i>5){
                   return this.arr[i]
                    }
                
            });

            return demoa
           
        },
      
    }

}
</script>
<style scoped>
    .header{
        width: 100%;
        height:0.58rem;
        line-height: 0.58rem;
        border-bottom: 1px solid #f3f3f3;
        display: flex;
        justify-content: space-between;
        margin: 0 5px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        background-color: #fff;
    }
    .link{
        font-size: 0.16rem;
        display: flex;
        align-items: center;
    } 
    .top{
        padding-top: .58rem;
    }
    .imgs{
        width: 90%;
        margin: 0 auto;
        overflow: hidden;
    } 
    .re-y{
        width: 100%;
        height: .5rem;    
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .re-y h2{
        font-size: .12rem;
        color: #111111;
    }
    .re-y span{
        font-size: 14px;
        color: #42bd56;
        margin-right: .19rem;
    }
</style>