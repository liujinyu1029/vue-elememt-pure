<template>
  <input style="height: 30px;width:50px;border: 1px solid #DEE1E1;border-radius: 4px;text-indent: 1em"
      type="text"
      :value="initValue"
      @blur="$emit('blur',data,$event.target.value)"
  >
</template>
<script>
  //因为el-input需要用v-model绑定数据，双向绑定的局限性，做了这个单向的组件
  export default {
    name: 'McInput',
    props: ['initValue','data'],
    methods:{
      created(){},
    }
  }
</script>