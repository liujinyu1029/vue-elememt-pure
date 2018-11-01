<template>
    <div class="markup-content"  v-loading="loading">
        <!--表单部分-->
        <el-form ref="form" :model="form" label-width="80px" :inline="true">
            <el-form-item label="活动名称">
                <mc-input style="width:120px" initValue="" :data="form" @blur="mcInputOnBlur"></mc-input>
            </el-form-item>
            <el-form-item label="活动范围">
                <el-select v-model="form.region" placeholder="请选择活动区域" size="mini">
                    <el-option label="上海" value="shanghai"></el-option>
                    <el-option label="北京" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="活动时间">
                <el-date-picker
                        size="mini"
                        v-model="form.dataTime"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="活动性质">
                <el-checkbox-group v-model="form.type" size="mini">
                    <el-checkbox label="线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="即时配送">
                <el-switch v-model="form.delivery" size="mini"></el-switch>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSearch()" size="mini">查询</el-button>
            </el-form-item>
        </el-form>
        <!--table表格部分-->
        <el-table
                border
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="id"
                    label="ID"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名">
            </el-table-column>
            <el-table-column
                    prop="amount1"
                    sortable
                    label="数值 1">
            </el-table-column>
            <el-table-column
                    prop="amount2"
                    sortable
                    label="数值 2">
            </el-table-column>
            <el-table-column
                    prop="amount3"
                    sortable
                    label="数值 3">
            </el-table-column>
        </el-table>
        <!--页码工具条-->
        <div style="margin-top: 10px;">
            <el-pagination
                    background
                    style="float:right;"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="form.offset / form.limit + 1"
                    :page-sizes="[20, 50, 100, 200]"
                    :page-size="form.limit"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
  import {getTableList} from '../../api/demo'
  import {McInput} from '../../components' //引入组件
  import $ from 'jquery' //框架内集成了jQuery，可以像这样引用
  export default {
    data() {
      return {
        loading:false,
        form: {
          activeName: '',
          region: '',
          dataTime: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          limit:20,
          offset:0
        },
        total:0,
        tableData: []
      }
    },
    created:function(){
    },
    components:{
      McInput
    },
    methods: {
      mcInputOnBlur(data,value){
        this.form.activeName = value
      },
      onSearch() {
        this.loading = true;
        getTableList(this.form).then(({rows,total})=>{
          this.tableData = rows;
          this.total = total;
          this.loading = false;
        }).catch(err=>{
          this.tableData = [];
          this.total = 0;
          this.loading = false;
          console.warn('demo page get tablelist api error:',err)
        })
      },
      //page-size改变
      handleSizeChange: function (val) {
        this.form.limit = val;
        this.form.offset = 0;
        this.onSearch();
      },
      //翻页
      handleCurrentChange: function (val) {
        this.form.offset = (val - 1) * this.form.limit;
        this.onSearch();
      },
    }
  }
</script>
<style scoped lang="scss">
    .markup-top{

    }
</style>