import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      options: {
        list: [
          { "title": "Alabama", "value": "AL"},
          { "title": "Alaska", "value": "AK"},
          { "title": "Arizona", "value": "AZ"},
        ],
      }
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
