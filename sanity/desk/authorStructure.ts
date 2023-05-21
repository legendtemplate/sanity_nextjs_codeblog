import {ListItemBuilder} from 'sanity/desk'
import defineStructure from '../utils/defineStructure'
import {UsersIcon} from '@sanity/icons'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Author')
    .icon(UsersIcon)
    .schemaType('author')
    .child(S.documentTypeList('author'))
)
