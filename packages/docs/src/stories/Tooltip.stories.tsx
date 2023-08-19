import type { Meta, StoryObj } from '@storybook/react'
import { Box, Button, TooltipComponent, TooltipProps } from '@ignite-ui/react'

export default {
  title: 'Context/Tooltip',
  component: TooltipComponent,

  args: {
    children: <Button variant={'primary'}>Testando Tooltip</Button>,
    content: '26 de Outubro - Disponível',
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
export const WithBox: StoryObj<TooltipProps> = {
  args: {
    children: <Box>Testando Tooltip</Box>,
    content: '26 de Outubro - Disponível',
  },
}
