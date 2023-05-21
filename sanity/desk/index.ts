
import {ListItemBuilder, StructureResolver} from 'sanity/desk'
import post from './postStructure'
import tag from './tagStructure'
import category from './categoryStructure'
import author from './authorStructure'
import cardPost from './cardPostStructure'


const hiddenDocTypes = (listItem: ListItemBuilder) => {
  const id = listItem.getId()

  if (!id) {
    return false
  }

  return ![
    'post',
    'tag',
    'category',
    'cardPost',
    'author',
  ].includes(id)
}

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Blo Website')
    .items([
      post(S, context),
      S.divider(),
      cardPost(S, context),
      S.divider(),

    
  
      tag(S, context),
      category(S, context),
      S.divider(),
      author(S, context),

      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
