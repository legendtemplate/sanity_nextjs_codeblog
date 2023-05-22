import {defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'
export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    
    defineField({
      name: 'filter',
      title: 'Filter',
      type: 'string',
      options: {
        list: [
          { "title": "React Js", "value": "React Js"},
          { "title": "Next Js", "value": "Next Js"},
        ],
      }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
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
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
    }),
    defineField({
      name: 'image',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'},
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}],
    }),
  
    defineField({
      name: 'body',
      title: 'Body',
      type: 'body',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
   
  },
})
