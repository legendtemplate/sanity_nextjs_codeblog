import {ListItemBuilder} from 'sanity/desk'
import defineStructure from '../utils/defineStructure'
import {DocumentsIcon} from '@sanity/icons'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Card Post')
    .icon(DocumentsIcon)
    .schemaType('cardPost')
    .child(S.documentTypeList('cardPost'))
)