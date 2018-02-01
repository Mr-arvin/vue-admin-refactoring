<template>
  <div class="app-container">
      <div class="filter-container">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="事件名称">
            <el-input v-model="formInline.user" placeholder="事件名称"></el-input>
        </el-form-item>
        <el-form-item label="事件结果">
            <el-select v-model="formInline.region" placeholder="事件结果">
            <el-option label="不限" value="nothing"></el-option>
            <el-option label="成功" value="success"></el-option>
            <el-option label="失败" value="failed"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
        </el-form>
      </div>

      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
        prop="display_time"
        label="操作时间"
        width="180">
        </el-table-column>
        <el-table-column
        prop="author"
        label="姓名"
        width="180">
        </el-table-column>
        <el-table-column
        prop="address"
        label="地址">
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchList } from '@/api/article'
const defaultFormThead = ['apple', 'banana']
  export default {
    data() {
      return {
        tableData: [],
        list: null,
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    filters: {

    },
    created(){
        this.getList()
    },
    methods: {
        getList() {
            fetchList(this.listQuery).then(response => {
                this.list = response.data.items
                console.log(this.list)                
                this.tableData = this.list
            })
        },
        onSubmit() {
            console.log('submit!');
        }
    }
  }
</script>
