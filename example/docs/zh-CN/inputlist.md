## 列表筛选组件

通过InputList组件可以很方便的生成列表页筛选组件。

### 基础页面

:::demo
```html
 <input-list :inputList='inputList'>
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
              type: 'input',
              label: '测试input',
              col: 8,
              prop: 'inputVal'
            },
            {
              type: 'date',
              prop: 'date',
              label: '日期测试'
            }
          ],
          spanLength: 8,
          showLine: 1
        }
      }
    }
  }
</script>
```
:::
### 动态生成每一项的宽度spanLength以及通过showLine设置超过几行开始折叠。
:::demo
```html
 <input-list :inputList='inputList'>
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
              type: 'input',
              label: '测试input',
              col: 8,
              prop: 'inputVal'
            },
            {
              type: 'date',
              prop: 'date',
              label: '日期测试'
            }
          ],
          spanLength: 12,
          showLine: 1
        }
      }
    }
  }
</script>
```
:::

### 下拉选项为接口获取
通过getList这个选项key我们可以设置下拉框的数据来源为接口。
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
          },
          data: [
            {
              type: 'sel',
              label: '测试',
              col: 8,
              prop: 'text',
              getList() {
                return new Promise((resolve) => {
                  resolve([
                    {
                      label: '苹果',
                      value: 2
                    },
                    {
                      label: '香蕉',
                      value: 1
                    }
                  ])
                })
              }
            },
            {
              type: 'input',
              label: '测试input',
              col: 8,
              prop: 'inputVal'
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
            }
          ],
          spanLength: 8,
          showLine: 2
        }
      }
    }
  }
</script>
```
:::
### 下拉选项及联选择
:::demo
```html
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
  }
</script>

```
:::

### 查询以及重置功能
通过设置inputlist的search属性和refresh属性为函数可以监听重置和查询回调

:::demo
```html
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
            food: 99,
            date: ''
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
              label: '日期',
              prop: 'date',
              type: 'date',
              format: 'yyyy/MM/dd',
              'start-placeholder': "开始日期",
              'end-placeholder': "结束日期"
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
       console.log('refresh')
      }
    }
  };
</script>

```
:::