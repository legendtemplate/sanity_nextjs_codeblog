import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      options: {
        list: [
          { "title": "Alabama", "value": "Alabama"},
          { "title": "Alaska", "value": "Alaska"},
          { "title": "Arizona", "value": "Arizona"},
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
    defineField({
      name: 'sub_1_Name',
      title: 'Sub1Name',
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
      name: 'sub_1_Nameslug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'sub_2_Name',
      title: 'Sub2Name',
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
      name: 'sub_2_Nameslug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'sub_3_Name',
      title: 'Sub3Name',
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
      name: 'sub_3_Nameslug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'sub_4_Name',
      title: 'Sub4Name',
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
      name: 'sub_4_Nameslug',
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
