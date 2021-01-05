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
    ]
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

  actions: {
  },
  modules: {
  }
})
