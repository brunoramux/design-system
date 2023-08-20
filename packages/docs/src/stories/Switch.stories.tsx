import type { Meta, StoryObj } from '@storybook/react'
import { SwitchComponent, SwitchProps } from '@brunoramos-ui/react'

export default {
  title: 'Form/Switch',
  component: SwitchComponent,
  args: {
    text: 'Testando',
  },
} as Meta<SwitchProps>

export const Primary: StoryObj<SwitchProps> = {}
