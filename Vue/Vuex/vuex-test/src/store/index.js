import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: 类似于Vue实例里面的data
  state: {
    count: 10,
    students: [
      { name: '张三', age: 33 },
      { name: '李四', age: 44 },
      { name: '王五', age: 55 },
      { naem: '赵六', age: 66 }
    ],
    info: {
      name: '烧饼',
      age: 20,
      height: 175
    }
  },
  // mutations: 类似于Vue实例里面的methods
  mutations: {
    increment(state) {
      state.count++
    },
    idecrement(state) {
      state.count--
    },
    // 1普通提交风格
    // incrementCount(state, count) {
    //   state.count += count
    // },

    // 2特殊提交风格
    incrementCount(state, payload) {
      state.count += payload.count
    },
    addStudent(state, stu) {
      state.students.push(stu)
    },
    // 后来动态添加的数据没法响应式的问题
    updataInfo(state) {
      // state.info.name = 'shaobin'
      // 下面这个不是响应式
      // state.info['address'] = '漳浦'
      // set delete 响应式 第二个参数:对象为key 数组为索引
      Vue.set(state.info, 'address', '漳浦')
      Vue.delete(state.info, 'age')
    },
    asyncUpdataInfo(state) {
      Vue.set(state.info, 'address', '漳浦')
      Vue.delete(state.info, 'age')
    }

  },
  // getters 类似于Vue实例的computed
  // 参数：第一个为state 第二个为getters 注意没有第三个
  getters: {
    // 获取count的平方
    powerCount(state) {
      return state.count * state.count
    },
    // 获取students中age大于50的学生
    more50stu(state) {
      return state.students.filter(item => item.age > 50)
    },
    // 获取students中age大于50的学生人数
    more50stulength(state, getters) {
      return getters.more50stu.length
    },
    // 需要另外参数时 
    moreAgeStu(state) {
      return function (age) {
        return state.students.filter(item => item.age > age)
      }
    }
  },

  // 异步修改数据通过actions 提交到mutations
  actions: {
    aupdataInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('asyncUpdataInfo')
          console.log(payload);
          resolve('bbbbbb')
        }, 2000);
      })
    }
  },
  modules: {
  }
})
