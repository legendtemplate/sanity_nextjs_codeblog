import {defineType, defineArrayMember} from 'sanity'


export default defineType({
  title: 'body',
  name: 'body',
  type: 'array',
  of: [
    defineArrayMember({
      // title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'H5', value: 'h5'},
        {title: 'H6', value: 'h6'},
        {title: 'p', value: 'p'},
        {title: 'Quote', value: 'blockquote'},
      ],
      // lists: [
      //   {title: 'Bullet', value: 'bullet'},
      //   {title: 'Numbered', value: 'number'},
      // ],
      // Marks let you mark up inline text in the Portable Text Editor
      // marks: {
      //   // Decorators usually describe a single property – e.g. a typographic
      //   // preference or highlighting
      //   decorators: [
      //     {title: 'Strong', value: 'strong'},
      //     {title: 'Emphasis', value: 'em'},
      //     { title: 'Code', value: 'code' },
      //     { title: 'Highlight', value: 'highlight' }
          
      //   ],
      //   // Annotations can be any object structure – e.g. a link or a footnote.
      //   annotations: [
      //     {name: 'author', title: 'Author', type: 'reference', to: {type: 'author'}},
      //     {
      //       name: 'internalLink',
      //       type: 'object',
      //       title: 'Internal link',
      //       fields: [
      //         {
      //           name: 'reference',
      //           type: 'reference',
      //           title: 'Reference',
      //           to: [
      //             { type: 'post' },
      //             // other types you may want to link to
      //           ]
      //         }
      //       ]
      //     },
      //     {
      //       name: 'link',
      //       type: 'object',
      //       title: 'External link',
      //       fields: [
      //         {
      //           name: 'href',
      //           type: 'url',
      //           title: 'URL'
      //         },
      //         {
      //           title: 'Open in new tab',
      //           name: 'blank',
      //           description: 'Read https://css-tricks.com/use-target_blank/',
      //           type: 'boolean'
      //         }
      //       ]
      //     },
      //     {
      //       title: 'URL',
      //       name: 'link',
      //       type: 'object',
      //       fields: [
      //         {
      //           title: 'URL',
      //           name: 'href',
      //           type: 'url',
      //         },
      //       ],
      //     },
      //   ],
      // },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
  ],
})
