import type { Meta, StoryObj } from '@storybook/react'
import { Button, ToastComponent, ToastProps } from '@ignite-ui/react'

export default {
  title: 'Context/Toast',
  component: ToastComponent,

  args: {
    children: (
      <Button variant={'primary'} id="child">
        Testando Toast
      </Button>
    ),
    title: 'Titulo do Toast',
    content: 'Conteudo do Toast',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
