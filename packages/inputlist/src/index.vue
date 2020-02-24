<script type="text/babel">
  import elSelect from 'element-ui/packages/select'
  import elInput from 'element-ui/packages/input'
  import elOption from 'element-ui/packages/select/src/option'
  export default {
    name: 'InputList',
    props: {
        inputList: {
          type: Object,
          default() {
            return {
              data: [
                {
                  label: 'test',
                  span:  8,
                  prop: 'test',
                  placeholder: '',
                  disabled: 'false'
                }
              ],
              model: {},
              search() {},
              dealModel() {}
            }
          }
        }
    },
    components: {
      elOption,
      elInput,
      elSelect
    },
    data() {
      return {
      };
    },
    methods: {
      // 渲染筛选的每一项
      renderItems(h, item) {
        let self = this
        let types = {
          sel: self.renderSelect,
          input: self.renderInput,
          date: self.renderDate
        }
        return types[item.type](h, item)
      },
      renderSelect(h, item) {
        let self = this
         let placeholders = {
          sel: '请选择',
          input: '请输入'
        }
        let placeholder = item.placeholder || (placeholders[item.type] + item.label)
        return h('elSelect',
          {
              domProps: {
                value: self.inputList.model[item.prop]
              },
              props: {
                disabled: item.disabled,
                value: self.inputList.model[item.prop]
              },
              on: {
                input: function (event) {
                  self.inputList.model[item.prop] = event
                }
              }
          },
          this.renderOptions(h, item)
        )
      },
      renderInput(h, item) {
        return (
          <el-input></el-input>
        )
      },
      renderDate() {},
      renderOptions(c, options) {
        if (options.getList) {
          options.getList().then((data) => {
            options.sels = data
            return data.map((item, index) => {
              return c(
                'elOption', {
                  props: {
                    key: item.value,
                    label: item.label,
                    value: item.value
                  }
                }
              )
            })
          })
        } else {
          return options.sels.map((item, index) => {
              return c(
                'elOption', {
                  props: {
                    key: item.value,
                    label: item.label,
                    value: item.value
                  }
                }
              )
            })
        }
      },
      // 生成布局
      renderLayout(h, list) {
        return list.map((item,index) => {
          return (
            <el-col span={item.col || 8}>
              <span>{item.label + '：'}</span>
              {this.renderItems(h, item)}
            </el-col>
          )
        })
      }
    },
    render(h) {
      return (
        <div class='el-inputlist-com'>
        <el-row>
        {
          this.renderLayout(h, this.inputList.data)
        }
        </el-row>
        </div>
      )
    }
  };
</script>