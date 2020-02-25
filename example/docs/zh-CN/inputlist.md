## Layout 布局

通过InputList组件可以很方便的生成列表页筛选组件。

### 简单页面你

:::demo
```html
 <input-list :inputList='inputList'>
    <el-button>test</el-button>
</input-list> 

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
    }
  };
</script>
```
:::