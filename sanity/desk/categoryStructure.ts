import {ListItemBuilder} from 'sanity/desk'
import defineStructure from '../utils/defineStructure'
import {SyncIcon} from '@sanity/icons'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Category')
    .icon(SyncIcon)
    .schemaType('category')
    .child(S.documentTypeList('category'))
)
