<script type="text/babel">
  import elSelect from 'element-ui/packages/select'
  import elInput from 'element-ui/packages/input'
  import elOption from 'element-ui/packages/select/src/option'
  const defaultVal = {
    data: [],
    model: {},
    search() {},
    change() {},
    showLine: 2,
    spanLength: 8
  }
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
              change() {},
              showLine: 2,
              spanLength: 8
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
        showAll: false
      };
    },
    methods: {
      // 渲染筛选的每一项
      renderItems(h, item) {
        let self = this
         let placeholders = {
          sel: '请选择',
          input: '请输入',
          date: '请选择',
          time: '请选择',
          'dateTime': '请选择',
        }
        let placeholder = item.placeholder || (placeholders[item.type] + item.label)
        item.placeholder = placeholder
        let types = {
          sel: self.renderSelect,
          input: self.renderInput,
          date: self.renderDate,
          time: self.renderTime
        }
        return types[item.type](h, item)
      },
      // 渲染选择框
      renderSelect(h, item) {
        return (
           <div class='el-filter-content-com'>
            <el-select value={this.inputList.model[item.prop]}
             disabled={item.disabled} 
             on-change = {val => this.change(val, item)}
             on-input={val => this.inputList.model[item.prop] = val}>
              {this.renderOptions(h, item)}
            </el-select>
           </div>
        )
      },
      // 渲染input列表
      renderInput(h, item) {
        return (
          <div class='el-filter-content-com'>
            <el-input value={this.inputList.model[item.prop]} 
            disabled={item.disabled} 
            on-input={val => {this.inputEvent(val, item)}}
            on-change = {val => this.change(val, item)}
            ></el-input>
            </div>
        )
      },
      // 每一项的change事件
      change(val, item) {
        this.inputList[item.prop] = item.type === 'in' ? val.trim() : val
        if (item.change) {
          item.change.call(this.$parent, val, item)
        }
      },
      // 每一项的input事件
      inputEvent(val, item) {
        this.inputList.model[item.prop] = item.type === 'in' ? val.trim() : val
        if (item.change) {
          item.change()
        }
      },
      // 渲染日期时间框
      renderDate(h, item) {
        return(
           <div class='el-filter-content-com'>
              <el-date-picker
              type={item.dateType || 'date'}
              value={this.inputList.model[item.prop]}
              placeholder = {item.placeholder}
              disabled = {item.disabled}
              start-placeholder = {item.start}
              end-placeholder = {item.end}
              range-separator = {item.rangeSeparator}
              format = {item.format || 'yyyy/MM/dd'}
              value-format = {item.valueFormat || 'yyyy/MM/dd'}
              on-input = {(val) => {this.inputEvent(val, item)}}
              ></el-date-picker>
           </div>
        )
      },
      renderTime(h, item) {
        return(
           <div class='el-filter-content-com'>
              <el-time-select
              value={this.inputList.model[item.prop]}
              placeholder = {item.placeholder}
              disabled = {item.disabled}
              start-placeholder = {item.start}
              end-placeholder = {item.end}
              range-separator = {item.rangeSeparator}
              is-range = {item.isRange}
              format = {item.format || 'yyyy/MM/dd'}
              value-format = {item.formatValue || 'yyyy/MM/dd'}
              on-input = {(val) => {this.inputEvent(val, item)}}
              ></el-time-select>
           </div>
        )
      },
      // 渲染选择框的每一项
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
        let dom = this.inputList
        return list.map((item,index) => {
          if (this.showAll || (index+1)*(dom.spanLength) <= (dom.showLine)*24)
          return (
            <el-col span={dom.spanLength || 8}
            >
              <div class='filter-list-wrap'>
              <span class='filter-label'>{item.label + '：'}</span>
              {this.renderItems(h, item)}
              </div>
            </el-col>
          )
        })
      },
      renderScope(h) {
        if (this.$scopedSlots && this.$scopedSlots.default) {
          return this.$scopedSlots.default()
        }
      },
      // 渲染查看更多按钮
      renderShowMore(h) {
        let dom = this.inputList
        let data = dom.data
        if (data.length/(24/(dom.spanLength)) > dom.showLine) {
          return (
            <el-button type="text" 
            onClick = {
              this.changeShow
            }
            >
              {
                this.showAll ? "收起" : '展开'
              }
            </el-button>
          )
        }
      },
      renderIcon(h) {
        let dom = this.inputList
        let data = dom.data
        if (data.length/(24/(dom.spanLength)) > dom.showLine) {
          return (
            <i 
            class={this.showAll ? 'el-icon-arrow-down': 'el-icon-arrow-up'}
            onClick = {
              this.changeShow
            }
            >
            </i>
          )
        }
      },
      // 切换展开收起按钮
      changeShow() {
        this.showAll = !this.showAll
      },
      // 筛选功能
      search() {
        this.inputList.search && this.inputList.search.call(this.$parent, this.inputList.model)
      },
      // 重置功能
      refresh() {
        Object.keys(this.inputList.model).forEach((item) => {
          this.inputList.model[item] = ''
        })
        this.inputList.refresh && this.inputList.refresh.call(this.$parent)
      },
      init() {
        for(let i in this.inputList) {
          if (!i) {
            this.inputList[i] = defaultVal[i]
          }
        }
      }
    },
    render(h) {
      this.init()
      let inputlist = this.inputList
      let data = inputlist.data
      return (
         <el-collapse-transition>
          <div class='el-inputlist-com'>
            <el-row gutter={20}>
            {
              this.renderLayout(h, this.inputList.data)
            }
            </el-row>
            <div class='el-filter-btn-list'>
              <div class='el-filter-btn-left'>
              {
                this.renderScope(h)
              }
              </div>
              <div class='el-filter-btn-right'>
                <el-button type='primary' size='medium' icon='el-icon-refresh-right' onClick={this.search}>查询</el-button>
                <el-button size='medium' icon="el-icon-search" onClick={this.refresh}>重置</el-button>
                {this.renderShowMore(h)}
                {this.renderIcon(h)}
              </div>
            </div>
          </div>
        </el-collapse-transition>
      )
    }
  };
</script>
<style lang="scss">
.el-inputlist-com {
  .filter-list-wrap {
    width: 100%;
    align-items: center;
    margin-bottom: 20px;
    display: flex;
    .filter-label {
        width: 80px;
        text-align: right;
        overflow: hidden;
        word-break: break-all;
        word-wrap: break-word;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.85);
        margin-right: 10px;
    }
    .el-filter-content-com {
      flex: 1;
      .el-date-editor.el-input {
        width: 100%;
      }
      .el-select {
        width: 100%;
      }
    }
  }
  .el-filter-btn-list {
    display: flex;
    .el-filter-btn-right {
      flex: 1;
      text-align: right;
    }
  }
}
</style>