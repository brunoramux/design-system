import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@brunoramos-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'Send',
  },
  argTypes: {
    variant: {
      options: [
        'primary',
        'secondary',
        'tertiary',
        'WithIcon',
        'PadraoBB',
        'PadraoBBAzul',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create New',
  },
}
export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}
export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}
export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'lg',
  },
}
export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo <ArrowRight weight="bold" />{' '}
      </>
    ),
  },
}

export const PadraoBB: StoryObj<ButtonProps> = {
  args: {
    variant: 'padraoBB',
    size: 'lg',
    children: 'Banco do Brasil',
  },
}
export const PadraoBBAzul: StoryObj<ButtonProps> = {
  args: {
    variant: 'padraoBBAzul',
    size: 'lg',
    children: 'Banco do Brasil',
  },
}
