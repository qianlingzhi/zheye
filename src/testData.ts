export interface PostProps {
  id: number,
  title: string,
  excerpt: string,
  image?: {
    url: string,
    _id: string
  },
  createAt: string,
  columnId: number
}
export interface ColumnProps {
  _id: string,
  title: string,
  avatar?: {
    url:string,
    _id: string
  },
  description: string
}
