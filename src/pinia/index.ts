import { defineStore, createPinia } from 'pinia'
import { testColumn, testPosts } from '@/testData'
export const pinia = createPinia()
export interface UserProps {
  isLogin: boolean
  name?: string
  id?: number
}
export const userStore = defineStore('userStore', {
  state: () => {
    return {
      user: { } as UserProps
    }
  }
})
export const postStore = defineStore('postStore', {
  state: () => {
    return {
      testPosts: testPosts
    }
  },
  getters: {
    getPostBycid: (state) => {
      return (cid: number) => state.testPosts.filter(c => c.columnId === cid)
    }
  }
})
export const columnStore = defineStore('columnStore', {
  state: () => {
    return {
      testColumn: testColumn
    }
  },
  getters: {
    getColumnbyId: (state) => {
      return (id: number) => state.testColumn.find(c => c.id === id)
    }
  }
})
