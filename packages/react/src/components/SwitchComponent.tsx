import React from 'react'
import * as Switch from '@radix-ui/react-switch'
import { blackA } from '@radix-ui/colors'
import { styled } from '../styles'

export interface SwitchProps {
  text: string
}

export function SwitchComponent({ text }: SwitchProps) {
  return (
    <Flex css={{ alignItems: 'center' }}>
      <Label htmlFor="airplane-mode" css={{ paddingRight: 15 }}>
        {text}
      </Label>
      <SwitchRoot id="airplane-mode">
        <SwitchThumb />
      </SwitchRoot>
    </Flex>
  )
}

const SwitchRoot = styled(Switch.Root, {
  all: 'unset',
  width: 42,
  height: 25,
  backgroundColor: '$gray500',
  borderRadius: '9999px',
  position: 'relative',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: `0 0 0 2px black` },
  '&[data-state="checked"]': { backgroundColor: '$gray900' },
})

const SwitchThumb = styled(Switch.Thumb, {
  display: 'block',
  width: 21,
  height: 21,
  backgroundColor: '$gray100',
  borderRadius: '9999px',
  boxShadow: `0 2px 2px ${blackA.blackA7}`,
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(19px)' },
})

const Flex = styled('div', { display: 'flex' })
const Label = styled('label', {
  fontFamily: '$default',
  color: '$gray600',
  fontSize: 15,
  lineHeight: 1,
})

SwitchComponent.displayName = 'Switch'
