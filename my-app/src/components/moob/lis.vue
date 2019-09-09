<template>
    <div>
        <ul>
            <li v-for="(v,i) in ulsprops" :key="i" :border-color="v.color"><router-link :to="v.href" :color="v.color">{{v.title}}</router-link></li>
            
            
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lscoped>
     ul li{
        display: inline-block;
        margin: 0 0 .08rem .16rem;
        font-size: .16rem;
        border: 1px solid;
        border-radius: 4px;
        vertical-align: middle;
    }
     ul li a{
        display: inline-block;
        height: .5rem;
        line-height: .5rem;
        padding: 0 .24rem;
    }
</style>