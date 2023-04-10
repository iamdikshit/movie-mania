import {defineField, defineType} from 'sanity'
import {MdPerson as icon} from 'react-icons/md'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Please use "Firstname Lastname" format',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),

    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
    }),
  ],
  preview: {
    select: {title: 'name'},
  },
})
