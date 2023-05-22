import category from './schemas/category/schema/page'
import tag from './schemas/tag/schema/page'
import post from './schemas/posts/schema/page'
import author from './schemas/author/schema/page'
import body from './schemas/body'

const document = [
  post, //ok
  category, //ok
  tag, //ok
  author, //ok
  body
]


export const schema = [
  ...document
]
