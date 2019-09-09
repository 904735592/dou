<template>
    <div class="txt-ul">
        <ul >
            <p v-if="!v.line" v-for="(v,i) in tit" :key='i' :style="{'border-color':'#ffac20'}"><router-link :to="{'href':v.href}" :style="{'color':v.color}">{{v.title}}</router-link></p>
            <br v-else>
        </ul>
    </div>
</template>
<script>
export default {
    components:{
        
    },
    props:{
        tit:{
            type:Array,
            required:true
        }
    }
}
</script>
<style scoped>
    .txt-ul ul{
        width: 100%;
        padding: 8px 0;
        overflow: auto; 
        white-space: nowrap ;
        font-size: 0px;
    }
    .txt-ul ul p{
        display: inline-block;
        margin: 0 0 .08rem .16rem;
        font-size: .16rem;
        border: 1px solid;
        border-radius: 4px;
        vertical-align: middle;
    }
    .txt-ul ul p a{
        display: inline-block;
        height: .5rem;
        line-height: .5rem;
        padding: 0 .24rem;
    }
</style>