import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typografy/Heading',
  component: Heading,

  args: {
    children: (
      <>
        <Heading>Custom Title</Heading>
      </>
    ),
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'h1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrao o heading sempre sera um `h2`, mas podemos alterar isso com a propriedade `as`',
      },
    },
  },
}
