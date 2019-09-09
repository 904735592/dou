<template>
<div>
    <div class="con" v-for="(v,i) in text" :key='i'>
        <div class="zu">
            <div class="zu-list">
                <img :src="v.images.small">
                <h5>{{v.title.substring(0,10)}}</h5>
            </div>
            <span>20005人</span>
        </div>
        <p> <span>{{v.group_topic.time}}</span> {{v.group_topic.title.substring(0,19)}}</p>
    </div>
    
</div>
    
</template>
<script>
export default {
        components:{
        
    },
    props:{
        text:{
            type:Array,
            required:true
        }
    }
}
</script>
<style scoped>
   div{
       width: 100%;
       
   } 
   .zu{
       padding-top: 14px;
       display: flex;
       justify-content: space-between;
       align-items: center;
       white-space: nowrap ;
   }
   .zu img{
       width: .5rem;
       height: .5rem;
       margin-right: 12px;
   }
    .zu  h5{
        display: inline-block;
        font-size: .16rem;
        color: #111;
    }
     .zu span{
        
         display: block;
         font-size: 14px;
         color: #cccccc;
         margin-right: .18rem;
     }
   .zu-list{
       display: flex;
       align-items: center;
   }
   div>p{
       font-size: 14px;
       color: #aaa;
       height: .45rem;
       line-height: .45rem;
       border-bottom: 1px solid #f2f2f2;
   }
</style>