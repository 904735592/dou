<template>
    <div>
        <div class="to">
            <router-link to="/shouye">取消</router-link>
            <h2>登录豆瓣</h2>
        </div>
        <div class="from">
            <form action="" method="post">
                <input type="text" placeholder="邮件" class="name">
                <input type="text" placeholder="Token" class="pwd">
                <i class="el-icon-view i" @click="btn()"></i>
                <input type="submit" value="登录" class="but">       
            </form>
        </div >
        <p class="zhao">使用其他方式登录&找回密码</p>
        <p class="log">
            <router-link to="">注册豆瓣账号</router-link>
            <router-link to="">下载豆瓣APP</router-link>
        </p>
    </div>
</template>
<script>
import shouye from '../pages/shouye'
export default {
    methods: {
        btn(){
            this.style.color="#17aa52"
        }
    },
}
</script>
<style scoped>
div{
    font-size: 0px;
}
     .to{
         width: 100%;
         height: .53rem;
         line-height: .53rem;
         
     } 
     .to a,.to h2 {
         display: inline-block;
     }
     .to a{
         font-size: 14px;
         color: #17aa52;
         margin-left: .2rem;
     }
     .to h2{
         
         font-size: .16rem;
         width: 70%;
         text-align: center;
         height: .52rem;
         color: #272700;
     }
     .from{
         position: relative;
         border-top: 1px solid #aaa;
         width: 70%;
         margin: 0 auto;
         padding-top: .3rem;
     }
     .name,.pwd,.but{
         width: 100%;
         height:.5rem;
         border: 1px solid #aaa;
         border-radius: 5px;
     }
     .name,.pwd{
         text-indent: 5px;
     }
     .i{
         position: absolute;
         top: .95rem;
         right: 6%;
         font-size: .2rem;
     }
     .but{
         background-color: #17aa52;
         font-size: .16rem;
         color: #fff;
         margin-top:14px; 
     }
     .zhao{
         width: 100%;
         font-size: 13px;
         height: 13px;
         text-align: center;
         color: #aaa;
         margin: .25rem 0 .5rem 0;
     }
     .log{
         width: 100%;
         font-size: 14px;
         text-align: center;
         
     }
     .log a{
         color: #42bd56;
         
     }
     .log a:nth-child(1){
            margin-right: .25rem;
     }
</style>