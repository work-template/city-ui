<template>
  <div style="margin: 20px;">
    <InputList :inputList='inputList'>
    <el-button>test</el-button>
    </InputList> 
  </div>
</template>

<script>
  export default {
    data() {
      return {
        inputList: {
          model: {
            text: 2,
            inputVal: 1,
            date: '',
            food: 99
          },
          data: [
            {
              type: 'sel',
              label: '测试',
              col: 8,
              prop: 'text',
              sels: [
                {
                  label: '苹果',
                  value: 2
                },
                {
                  label: '香蕉',
                  value: 1
                }
              ],
              change(val,item) {
                this.foodChange(val, item)
              }
            },
            {
              label: 'aa',
              prop: 'food',
              type: 'sel',
              sels: [
                {
                  label: '馒头',
                  value : 99
                },
                {
                  label: '米饭',
                  value: 100
                }
              ]
            },
            {
              prop: 'date',
              label: '日期',
              type: 'date',
              valueFormat: 'yyyy/MM/dd hh',
              format: 'yyyy/MM/dd hh'
            }
          ],
          spanLength: 8,
          showLine: 1,
          search() {
            this.search()
          },
          refresh() {
            this.refresh()
          }
        }
      };
    },
    methods: {
      foodChange(val, item) {
        this.inputList.model.food = ''
      },
      search() {
        console.log('search')
      },
      refresh() {
        console.log(refresh)
      }
    }
  };
</script>
