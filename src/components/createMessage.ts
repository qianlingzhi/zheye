import { h, render } from 'vue'
import Message from './Message.vue'
export type MessageType = 'success' | 'error' | 'default'
const mountNode = document.createElement('div')
let setTimeoutId = 0
mountNode.id = 'message'
document.body.appendChild(mountNode)
const createMessage = (message: string, type:MessageType, timeout?: number) => {
  const messageVnode = h(Message, {
    message,
    type
  })
  render(messageVnode, mountNode)
  if (timeout) {
    setTimeoutId = setTimeout(() => {
      destory()
    }, timeout)
  }
}
const destory = () => {
  render(null, mountNode)
  clearTimeout(setTimeoutId)
}
export default createMessage
export { destory }
