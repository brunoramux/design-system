import type { Meta, StoryObj } from '@storybook/react'
import { Button, HoverCardComponent, HoverCardProps } from '@ignite-ui/react'

export default {
  title: 'Context/Hover Card',
  component: HoverCardComponent,

  args: {
    children: (
      <Button variant={'primary'} id="child">
        Testando Hover Card
      </Button>
    ),
    title: 'Titulo do Hover Card',
    content: 'Conteudo do Hover Card',
  },
} as Meta<HoverCardProps>

export const Primary: StoryObj<HoverCardProps> = {}
