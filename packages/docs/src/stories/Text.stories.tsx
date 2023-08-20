import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@brunoramos-ui/react'

export default {
  title: 'Typografy/Text',
  component: Text,

  args: {
    children: (
      <>
        <Text>Testando o elemento Text</Text>
      </>
    ),
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
