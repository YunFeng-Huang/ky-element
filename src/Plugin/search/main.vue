<template>
  <v-el-search :BigList="BigList" :params.sync="params">
        <el-button type="primary" @click="_Reset">重置</el-button>
        <el-button type="primary" @click="_Submit">查询</el-button>
        <el-popover
          placement="bottom"
          title="高级筛选"
          width="600"
          trigger="click"
          >
          <v-el-search :BigList="BigList1" :params.sync="params1"></v-el-search>
          <a class="senior" slot="reference">高级筛选 <i class="el-icon-arrow-down el-icon--right"></i></a>
        </el-popover>
    </v-el-search>
</template>

<script>
import VElSearch from './src/index'
export default {
  name: 'search',
  data () {
    return {
      BigList: [
        {
          type: 'input',
          label:'审批人',
          key:'name',
          value:'123',
        },
        
        {
          type: 'select',
          label:'喜欢糕点',
          value:'选项1',
          key:'age',
          options:[{
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
          }]
        },
        {
          type: 'picker-date',
          label:'时间1',
          key:'date1',
          value:'',
          format:'yyyy 年年 MM 月 dd 日',
          valueFormat:'yyyy-MM-dd',
        },
        {
          type: 'picker-daterange',
          label:'时间段2',
          key:'date2',
          value:[]
        }
      ],
      BigList1: [
        {
          type: 'input',
          label:'审批人',
          key:'name',
          value:'123',
        },
        
        {
          type: 'select',
          label:'喜欢糕点',
          value:'选项1',
          key:'age',
          options:[{
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
          }]
        },
        {
          type: 'picker-date',
          label:'时间1',
          key:'date1',
          value:'',
          format:'yyyy 年年 MM 月 dd 日',
          valueFormat:'yyyy-MM-dd',
        },
        {
          type: 'picker-daterange',
          label:'时间段2',
          key:'date2',
          value:[]
        }
      ],
      params:{},
      params1:{}
    }
  },
  methods: {
    _Submit() {
      console.log(this.params)
    },
    _Reset(){
      this.BigList.map(v => {
        return v.value = null
      })
    },
  },
  components:{
    VElSearch
  }
}
</script>

<style scoped>
.senior{
  margin-left: 10px;
  cursor: pointer;
}
</style>
