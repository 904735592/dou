<template>
    <div class="list">
        <ul>
            <li v-for="(v,i) in obj" :key="i"><router-link to="">{{v.name}}<span></span></router-link></li>    
                
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
             obj:[
                {"name":"经典"},
                {"name":"冷门佳作"},
                {"name":"豆瓣高分"},
                {"name":"动作"},
                {"name":"喜剧"},
                {"name":"爱情"},
                {"name":"悬疑"},
                {"name":"恐怖"},
                {"name":"科幻"},
                {"name":"治愈"},
                {"name":"文艺"},
                {"name":"成长"},
                {"name":"动画"},
                {"name":"华语"},
                {"name":"欧美"},
                {"name":"韩国"},
                {"name":"日本"}
            ]
        }
       
    }
}
</script>
<style scoped>
    .list ul{
        width: 100%;
    }
    .list ul li{
        float: left;
        width: 50%;
        height: .32rem;
        line-height: .32rem;
        box-sizing: border-box;
        padding-right: .18rem;
        padding-left:0.08rem;
        font-size: .14rem;
        border-top: 1px solid #eee;
        border-right: 1px solid #eee;
        
    }
    .list ul li a{
        color: #42bd56;
    }
    .list ul li a span{
        float:right;
        color: #cccccc;
        font-weight: 700;
        display: inline-block;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        width: .08rem;
        height: .08rem;
        transform: rotate(-45deg);
        margin-top: .12rem;
    }
</style>