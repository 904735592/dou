<template>
    <div >
        
            <img :src="ziimgurl">
            <br>
            <span>{{zititle}}</span>
                <el-rate 
                    v-model="value"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}">
                </el-rate>
        
    </div>
</template>
<script>
export default {
    components:{
        
    },
    data() {
      return {
        value: 4.9
      }
    },
    props:["zititle","ziimgurl"]
}
</script>
<style scoped>
div{
    margin-right:5px;
    font-size: 0px;
    
    
    text-align: center;
}
    img{
        width: 1.2rem;
        height: 1.8rem;
    }
    span{
        
        line-height: .32rem;
        font-size: 14px;
        text-align: center;
        color: #111111;
    }
    
</style>