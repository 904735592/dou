<template>
    <div class="ico">
        <router-link to="">
            <div>
                <img src="../assets/r.jpg" >
                <span>请先登录</span>
            </div>
            
            <p>
                <img src="../assets/b.jpg" >
                <img src="../assets/x.jpg" >
            </p>
        </router-link>
        
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .ico{
        padding: .1rem .18rem;
        
    }
    .ico a{
        display: block;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #aaa;
    }
    .ico a>div,.ico p{
        display: flex;
        align-items: center;
    }
    .ico a>div span{
        font-size: 14px;
        color: #aaa;
        margin-left: 10px;
    }
    .ico p img:nth-child(2){
        margin-left: .15rem;
        margin-right: .15rem;

    }
</style>