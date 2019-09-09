<template>
    <div>
        <h2>欢迎加入豆瓣</h2>
        <div class="from">
            <form action="" method="post">
                <input type="text" placeholder="邮件" class="name" name="uname">
                <input type="text" placeholder="密码" class="pwd" name="pwd">
                <i class="el-icon-view i" @click="btn()"></i>
                <input type="text" placeholder="用户名" class="pwd" name="email">
                <input type="submit" value="立即注册" class="but" @click="fun()">       
            </form>
        </div >
        <p class="zhao">使用其他方式登录&找回密码</p>
        <p class="log">
            
            <router-link to="">下载豆瓣APP</router-link>
        </p>
    </div>
</template>
<script>
export default {
    methods: {
        fun(){
            var uname= $("input[name=uname]").val();
            var upwd= $("input[name=pwd]").val();
            var email= $("input[name=email]").val();
            console.log(uname+"---"+upwd);
        }

    },
}
</script>
<style scoped>
div{
    font-size: 0px;
}
   h2{
       width: 100%;
       height: .8rem;
       line-height: 1.2rem;
       text-align: center;
       color: #42bd56;
       font-weight: 300;
       font-size: .4rem;
   }
   .from{
         position: relative;
         
         width: 90%;
         margin: 0 auto;
         padding-top: .3rem;
     }
     .name,.pwd,.but{
         width: 100%;
         height:.4rem;
         border: 1px solid #aaa;
         border-radius: 3px;
     }
     .name,.pwd{
         text-indent: 5px;
     }
     .i{
         position: absolute;
         top: .8rem;
         right: 6%;
         font-size: .2rem;
     }
     .but{
         background-color: #17aa52;
         font-size: .16rem;
         color: #fff;
         margin-top:14px; 
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
</style>