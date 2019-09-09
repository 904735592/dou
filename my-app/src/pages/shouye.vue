<template>
<div>
    <div class="header">
        <dou></dou>
        <div class="link">
           <routerlink></routerlink> 
           <susuo></susuo>
        </div>    
    </div>
    <div class="auto">
        <router-link to="reying">影院热映</router-link>
        <router-link to="xinbang">欧美新碟榜</router-link>
        <router-link to="zhuce">注册账号</router-link>
        <router-link to="login">登录豆瓣</router-link>
    </div>
    <div class="con" v-for="(v,i) in arr" :key="i">
        <div class="media">
        
            <div class="media-b f">
                <h4 class="media-heading">
                    {{v.title}}
                </h4>
                <p class="con-p">
                    {{v.content.substring(0,30)}}
                </p>
            </div>
            <div class=" left-left">
            
                    <router-link to="">
                       <img :src="v.image"> 
                    </router-link>
                
                
            </div>      
        </div>
        <div class="con-box">
                <p>{{v.category_name}}</p>
                <b v-if="v.subcategory_name">本活动来自栏目<span >{{v.subcategory_name}}</span></b>
                
        </div>
    </div>
    
</div>

    

</template>
<script>
import dou from '../components/dou'
import routerlink from '../components/routerlink'
import susuo from '../components/susuo'
import reying from './reying'
import xinbang from './xinbang'
import zhuce from './zhuce'
import login from './login'
var arr=[];
export default {
    components:{
        routerlink,
        dou,
        susuo  
    },
    data(){
        return{
            arr:[]
        }
    },
    created(){
       this.axios({
                method:"get",
                url:"/shouye"
            }).then((data)=>{
                console.log(data.data.shouye);
                this.arr=data.data.shouye;
            })
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
    }
    .link{
        font-size: 0.16rem;
        display: flex;
        align-items: center;
    }
    .auto{
        width: 80%;
        margin:  0 auto;
        padding-top: .24rem;
        display: flex;
        flex-wrap: wrap;
    }
    .auto>a{
        width: 49%;
        height: 0.53rem;
        background-color: #f6f6f6;
        border-radius: 5px;
        text-align: center;
        line-height: .53rem;
        font-size: .14rem;
        color: #494949;
        
    }
    .auto a:nth-child(2n-1){    
        margin-right: 2%;
        /* box-sizing: border-box; */
        margin-bottom: 2%;
    }
    .con{
        width: 90%;
        margin: 0 auto;
        border-bottom:1px solid #e3e3e3; 
        padding-top: .3rem;
    }
    .media{
        display: flex;
        justify-content: space-between;
    }
    .con .left-left{
        
        padding-left: 0.15rem;
    }
    .con .left-left a{
        display: block;
        width: .87rem;
        height: 1.05rem;
    }
    .con h4{
        font-size: .16rem;
        color: #494949;
    }
    .con img{
        margin-right: 0px;
        width: 100%;
        height: 100%;
    }
    .con .con-p{
        font-size: 12px;
        color: #aaaaaa;
    }
    .con .con-box{
        width: 100%;
        height: .38rem;
        line-height: .38rem;
        color: #cccccc;
        font-size: 14px;
    }
    .con .con-box p{
        float: left;
    }
    .con .con-box b{
        font-weight: 100;
        float: right;
    }
    .con .con-box b>span{
        margin-left: 5px;
    }
</style>