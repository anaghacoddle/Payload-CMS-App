import { CollectionConfig } from 'payload/types'

const LoginUsers: CollectionConfig = {
  slug: 'login-users',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'username',
  },
  fields: [
    {
        name: 'email',
        type: 'text',
        label: "Email",
        // required: true,
      },
      {
        name: 'username',
        type: 'text',
        label: "Username",
      },
  ],
}

export default LoginUsers
