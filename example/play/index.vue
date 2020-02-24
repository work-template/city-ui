<template>
  <div style="margin: 20px;">
    <!-- <el-select v-model='inputList'></el-select> -->
    <InputList :inputList='inputList'></InputList> 
  </div>
</template>

<script>
  import InputList from '../../packages/inputlist/index.js'
  export default {
    data() {
      return {
        input: 'Hello Element UI!',
        inputList: {
          model: {
            text: 2,
            inputVal: 1
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
              ]
            },
            {
              type: 'input',
              label: '测试input',
              col: 8,
              prop: 'inputVal'
            }
          ],
        }
      };
    },
    components: {
      InputList
    },

  };
</script>
