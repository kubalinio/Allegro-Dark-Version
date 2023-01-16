import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
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
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),

    defineField({
      name: 'mainImage',
      title: 'MainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'smart',
      title: 'Smart',
      type: 'boolean',
    }),

    defineField({
      name: 'superPrice',
      title: 'SuperPrice',
      type: 'boolean',
    }),

    defineField({
      name: 'payLater',
      title: 'PayLater',
      type: 'boolean',
    }),
    defineField({
      name: 'hit',
      title: 'Hit',
      type: 'boolean',
    }),
  ],
})
