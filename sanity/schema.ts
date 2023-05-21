import category from './schemas/category'
import tag from './schemas/tag'

import post from './schemas/post'

import author from './schemas/author'



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
