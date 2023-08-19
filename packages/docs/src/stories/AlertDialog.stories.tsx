import type { Meta, StoryObj } from '@storybook/react'
import {
  Button,
  AlertDialogComponent,
  AlertDialogProps,
} from '@ignite-ui/react'

export default {
  title: 'Context/Alert Dialog',
  component: AlertDialogComponent,

  args: {
    children: <Button variant={'primary'}>Testando Alert Dialog</Button>,
    title: 'Titulo do Dialog',
    description: 'Conteudo do Dialog',
  },
} as Meta<AlertDialogProps>

export const Primary: StoryObj<AlertDialogProps> = {}
