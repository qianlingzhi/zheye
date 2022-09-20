import { defineStore, createPinia } from 'pinia'
import { ColumnProps, PostProps } from '@/testData'
import axios from 'axios'
export const pinia = createPinia()
export interface UserProps {
  isLogin: boolean
  nickName?: string
  _id?: number
  column:string
}
export const loaderStore = defineStore('loaderSotre', {
  state: () => {
    return {
      isLoadIng: false
    }
  }
})
export const userStore = defineStore('userStore', {
  state: () => {
    return {
      user: <UserProps>{},
      token: localStorage.getItem('token') || ''
    }
  },
  actions: {
    async login (params: object) {
      const { data } = await axios.post('/user/login', params)
      this.token = data.data.token
      localStorage.setItem('token', this.token)
      axios.defaults.headers.common.Authorization = `Bearer ${this.token}`
      this.getUserInfo()
    },
    async getUserInfo () {
      const { data } = await axios.get('/user/current')
      console.log(data)
      this.user = { isLogin: true, ...data.data }
    }
  }
})
export const postStore = defineStore('postStore', {
  state: () => {
    return {
      testPosts: <PostProps[]>[]
    }
  },
  actions: {
    async getPostBycid (id: string) {
      const { data: postData } = await axios.get(`/columns/${id}/posts?currentPage=1&pageSize=6`)
      this.testPosts = postData.data.list
    }
  }
})
export const columnStore = defineStore('columnStore', {
  state: () => {
    return {
      testColumn: <ColumnProps[]>[]
    }
  },
  getters: {
    getColumnbyId: (state) => {
      return (cid: string) => state.testColumn.find(c => c._id === cid)
    }
  },
  actions: {
    async getColumns () {
      const { data } = await axios.get('/columns?currentPage=1&pageSize=6')
      this.testColumn = data.data.list
    },
    async getColumn (id: string) {
      const { data } = await axios.get(`/columns/${id}`)
      this.testColumn = [data.data]
    }
  }
})
