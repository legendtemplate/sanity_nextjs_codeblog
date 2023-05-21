import {ListItemBuilder} from 'sanity/desk'
import defineStructure from '../utils/defineStructure'
import {TagIcon} from '@sanity/icons'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Tags')
    .icon(TagIcon)
    .schemaType('tag')
    .child(S.documentTypeList('tag'))
)
