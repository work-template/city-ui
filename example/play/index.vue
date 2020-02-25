<template>
  <div style="margin: 20px;">
    <!-- <el-select v-model='inputList'></el-select> -->
    <InputList :inputList='inputList'>
    <el-button>test</el-button>
    </InputList> 
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: 'Hello Element UI!',
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
            }
          ],
          spanLength: 8,
          showLine: 1
        }
      };
    },
    methods: {
      foodChange(val, item) {
        this.inputList.model.food = ''
      }
    }
  };
</script>
