## inputlist 列表页筛选组件功能说明

通过inputlist组件，迅速的创建后台管理系统中列表页的筛选功能

:::通过传递props我们可以很快捷的创建出来一个简单的筛选功能ui。
```html
  <div style="margin: 20px;">
    <!-- <el-select v-model='inputList'></el-select> -->
    <InputList :inputList='inputList'>
    <el-button>test</el-button>
    </InputList> 
  </div>
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
            aa: ''
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
            },
            {
              type: 'date',
              prop: 'date',
              label: '日期测试'
            },
            {
              label: 'aa',
              prop: 'aa',
              type: 'input'
            },
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
            },
            {
              type: 'date',
              prop: 'date',
              label: '日期测试'
            },
            {
              label: 'aa',
              prop: 'aa',
              type: 'input'
            },
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
            },
            {
              type: 'date',
              prop: 'date',
              label: '日期测试'
            },
            {
              label: 'aa',
              prop: 'aa',
              type: 'input'
            }
          ],
          spanLength: 8,
          showLine: 1
        }
      };
    },
    watch: {
      inputList: {
        deep: true,
        handler(val) {
          console.log(val)
        }
      }
    },
    components: {
      InputList
    },

  };
</script>
```
:::