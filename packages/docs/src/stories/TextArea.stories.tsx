import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Text,
  TextArea,
  TextAreaProps,
  TextInputProps,
} from '@ignite-ui/react'

export default {
  title: 'Form/Text Text Area',
  component: TextArea,

  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observation...',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
