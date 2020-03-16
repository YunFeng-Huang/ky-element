<template>
  <el-form :inline="true" :label-width="defaultLabelWidth" :model="formInline" class="demo-form-inline">
    <el-form-item :label="item.label" v-for="(item,index) in BigList" :key="index">
      <el-input v-if="item.type == 'input'" v-model="formInline[item.key]" placeholder="请输入"></el-input>
      <el-select v-if="item.type == 'select'" v-model="formInline[item.key]" placeholder="请选择">
        <el-option
          v-for="item in item.options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-date-picker
        v-if="item.type == 'picker-date'"
        v-model="formInline[item.key]"
        type="date"
        :format="item.format || 'yyyy 年 MM 月 dd 日'"
        :value-format="item.valueFormat || 'timestamp'"
        placeholder="选择日期">
      </el-date-picker>
      <el-date-picker
        v-if="item.type == 'picker-daterange'"
        v-model="formInline[item.key]"
        type="daterange"
        :format="item.format || 'yyyy 年 MM 月 dd 日'"
        :value-format="item.valueFormat || 'timestamp'"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        >
      </el-date-picker>
    </el-form-item>
    <slot></slot>
</el-form>
</template>

<script>
  export default {
    name:'VElSearch',
    props:{
      BigList :{
        type: Array,
        required:true
      },
      params:{
        type:Object,
        required:true
      },
      defaultLabelWidth:{
        type:String,
        default:'80px'
      }
    },
    data() {
      return {
        formInline: {},
      }
    },
    watch: {
      BigList:{
        handler(newval){
          newval.map(v => {
            this.$set(this.formInline,v.key,v.value)
          })
        },
       deep:true
      },
      formInline:{
        handler(newval){
          this.$emit('update:params', newval)
        },
        deep:true
      }
    },
    created() {
      this.BigList.map(v => {
        this.$set(this.formInline,v.key,v.value)
      })
    },
  }
</script>