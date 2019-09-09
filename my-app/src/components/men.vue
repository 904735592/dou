<template>
    <div class="dou">
        <div class="dou-mun">
            <img src="../assets/dou.jpg">
            <p>
                <span>豆瓣</span><br>
                我们的精神角落
            </p>
        </div>
        <p class="op">
            去
            <router-link to="">App</router-link>
            <router-link to="">Store</router-link>
            <router-link to="">免费下载</router-link>
            <router-link to="">IOS</router-link>
            <router-link to="">客户端</router-link>
        </p>
        

    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .dou{
        width: 100%;
        overflow: hidden;
    }
    .dou-mun{
        display: flex;
        justify-content: center;
        padding-top: .6rem;
    }
    .dou-mun img{
        width: .58rem;
        height: .58rem;
    }
    .dou-mun p{
        font-size: 14px;
        margin-top: 10px;
        margin-left: 14px;
        color:#111;
    }
    .dou-mun p span{
        font-size: .18rem;
        font-weight: 600;

    }
    .op{
        text-align: center;
        color: #42bd56;
        font-size: 14px;
        padding-top:.2rem ;
        padding-bottom: .6rem;
    }
    .op a{
        color: #42bd56;
    }
</style>