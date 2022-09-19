import { defineStore, createPinia } from 'pinia'
import { ColumnProps, PostProps } from '@/testData'
import axios from 'axios'
export const pinia = createPinia()
export interface UserProps {
  isLogin: boolean
  name?: string
  id?: number
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
      user: <UserProps>{}
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
