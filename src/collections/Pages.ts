import { slateEditor } from '@payloadcms/richtext-slate'
import { CollectionConfig } from 'payload/types'

const Pages: CollectionConfig = {
  slug: 'pages',
access: {
  read: () => true,
},
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
        name: 'title',
        type: 'text',
        label: "Title",
      },
      {
        name: 'content',
        type: 'richText',
        editor: slateEditor({
          admin: {
            elements: [
            ],
            leaves: [
            ]
          }
        })
      },
  ],
}

export default Pages
