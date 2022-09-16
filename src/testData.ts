export interface PostProps {
  id: number,
  title: string,
  content: string,
  image?: string,
  createAt: string,
  columnId: number
}
export interface ColumnProps {
  id: number,
  title: string,
  avatar?: string,
  description: string
}
export const testColumn: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是一个专栏，请写顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5e913ea8912836262645f30e.png?x-oss-process=image/resize,m_fill,h_110,w_200'
  },
  {
    id: 2,
    title: 'test1的专栏',
    description: '这是一个专栏，请写顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5e913ea8912836262645f30e.png?x-oss-process=image/resize,m_fill,h_110,w_200'
  },
  {
    id: 3,
    title: 'test1的专栏',
    description: '这是一个专栏，请写顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5e913ea8912836262645f30e.png?x-oss-process=image/resize,m_fill,h_110,w_200'
  },
  {
    id: 4,
    title: 'test1的专栏',
    description: '这是一个专栏，请写顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5e913ea8912836262645f30e.png?x-oss-process=image/resize,m_fill,h_110,w_200'
  }
]
export const testPosts: PostProps[] = [
  {
    id: 1,
    title: '这是我的第一篇文章',
    content: '滴哦方式的说法是的事发生发射点发射点发射点发生飞洒发我无人机无人理解为日理万机仍无人问津人口两万警卫任务',
    image: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5e912f4c7f24af242a382b8c.png?x-oss-process=image/resize,m_fill,h_110,w_200',
    createAt: '2020-06-11 12:12:12',
    columnId: 1
  },
  {
    id: 2,
    title: '这是我的第一篇文章',
    content: '滴哦方式的说法是的事发生发射点发射点发射点发生飞洒发我无人机无人理解为日理万机仍无人问津人口两万警卫任务',
    image: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5e912f4c7f24af242a382b8c.png?x-oss-process=image/resize,m_fill,h_110,w_200',
    createAt: '2020-06-11 12:12:12',
    columnId: 1
  },
  {
    id: 3,
    title: '这是我的第一篇文章',
    content: '滴哦方式的说法是的事发生发射点发射点发射点发生飞洒发我无人机无人理解为日理万机仍无人问津人口两万警卫任务',
    image: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5e912f4c7f24af242a382b8c.png?x-oss-process=image/resize,m_fill,h_110,w_200',
    createAt: '2020-06-11 12:12:12',
    columnId: 1
  },
  {
    id: 4,
    title: '这是我的第一篇文章',
    content: '滴哦方式的说法是的事发生发射点发射点发射点发生飞洒发我无人机无人理解为日理万机仍无人问津人口两万警卫任务',
    createAt: '2020-06-11 12:12:12',
    columnId: 1
  }
]
