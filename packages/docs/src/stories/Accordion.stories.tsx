import type { Meta, StoryObj } from '@storybook/react'
import { AccordionComponent, AccordionProps } from '@brunoramos-ui/react'

export default {
  title: 'Context/Accordion',
  component: AccordionComponent,

  args: {
    content: [
      {
        title: 'Titulo do Dialog 1',
        description: 'Conteudo do Dialog 1',
      },
      {
        title: 'Titulo do Dialog 2',
        description: 'Conteudo do Dialog 2',
      },
      {
        title: 'Titulo do Dialog 3',
        description: 'Conteudo do Dialog 3',
      },
    ],
  },
} as Meta<AccordionProps>

export const Primary: StoryObj<AccordionProps> = {}
