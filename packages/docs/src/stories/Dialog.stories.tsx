import type { Meta, StoryObj } from '@storybook/react'
import { Button, DialogBox, DialogProps } from '@brunoramos-ui/react'

export default {
  title: 'Context/Dialog',
  component: DialogBox,
  args: {
    title: 'Título',
    description: 'Conteúdo',
    children: <Button>Ver Dialog</Button>,
  },
} as Meta<DialogProps>

export const Primary: StoryObj<DialogProps> = {}
