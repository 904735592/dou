<template>
<div>
    <div class="head">
        <router-link to="/shouye">关闭</router-link>
        <input type="text" placeholder="搜索" class="inp">
    </div>
    <div class="box">
        <router-link to="#" v-for="(v,i) in obj" :key="i">
                    <strong :style="{'color':v.color}">{{v.name}}</strong>
                    <br>
                    <span>{{v.txt}}</span>
        </router-link>     
    </div>
    <div class="bo">
        <p>
            <router-link to="/zhuce">注册账号</router-link>
            <router-link to="/login">登录豆瓣</router-link>
        </p>
        <p>
            <router-link to="">使用桌面版</router-link>
            <router-link to="">使用豆瓣APP</router-link>
        </p>
        
    </div>
</div>
    
</template>
<script>
import shouye from '../pages/shouye'
import zhuce from '../pages/zhuce'
import login from '../pages/login'
export default {
    
        data(){
            return{
                obj:[
                    {"name":"电影","txt":"影院热映","color":"#2384e8"},
                    {"name":"电视","txt":"正在热播","color":"#7a6adb"},
                    {"name":"图书","txt":"畅销排行","color":"#9f7860"},
                    {"name":"同城","txt":"周末活动","color":"#e6467e"},
                    {"name":"小组","txt":"志趣相同","color":"#e6467e"},
                    {"name":"音乐","txt":"新碟榜","color":"#f48f2e"},
                    {"name":"阅读","txt":"电子书","color":"#9f7860"},
                    {"name":"游戏","txt":"虚拟世界","color":"#5774c5"},
                    {"name":"应用","txt":"玩手机","color":"#596cdd"},
                    {"name":"东西","txt":"心爱之物","color":"#e1644d"},
                    {"name":"FM","txt":"心动歌单","color":"#40cfa9"},
                    {"name":"市集","txt":"购买原创","color":"#42bd56"}
                ]
            }
        }
    
}
</script>
<style scoped>
    .head{
        width: 90%;
        margin: 12px auto;
        font-size: 0px;
    }
    .head a{
        font-size: .16rem;
        color: #42bd56;
    }
    .inp{
        width: 85%;
        height: .35rem;
        text-align: center;
        margin-left: 4%;
        background-color: #f3f3f3;
        border: 1px solid #f3f3f3;
        border-radius: 5px;
    }
    .box{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin: 0 2%;
        font-size: 0px;
    }
    .box a{
        width: 32%;
        text-align: center;
        padding-top: .3rem;
    }
    .box a strong{
        font-size: .2rem;  
    }
    .box a span{
        font-size: 12px;
        color: #999999;
    }
    .bo{
        width: 100%;
        border-top: 1px solid #f3f3f3;
        margin-top: .35rem;
    }
    .bo p{
        width: 100%;
        padding: 15px 0px;
        border-bottom: 1px solid #f3f3f3;
        display: flex;
    }
    .bo p a{
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: #42bd56;
    }
    .bo p a:nth-child(2n-1){
        box-sizing: border-box;
        border-right: 1px solid #f3f3f3;
    }
</style>