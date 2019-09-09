<template>
    <div> 
        <router-link to="/dianying">电影</router-link>
        <router-link to="/tushu">图书</router-link>
        <router-link to="/guangbo">广播</router-link>
        <router-link to="/xiaozu">小组</router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    div a{
        font-size: .16rem;
        cursor: pointer;
        margin-right: 8px;
    }
    div a:nth-child(1){   
        color: #2384e8;
    }
    div a:nth-child(2){    
        color: #9f7860;
    }
    div a:nth-child(3){     
        color: #e4a813;
    }
    div a:nth-child(4){
        margin-right: 12px;
        color: #8cc4e8;
    }
</style>