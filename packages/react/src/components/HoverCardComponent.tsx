import React, { ReactNode } from 'react'
import * as HoverCard from '@radix-ui/react-hover-card'
import { keyframes } from '@stitches/react'
import { styled } from '../styles'

export interface HoverCardProps {
  children: ReactNode
  title: string
  content: string
}

export function HoverCardComponent({
  children,
  content,
  title,
}: HoverCardProps) {
  return (
    <HoverCardRoot>
      <HoverCard.Trigger asChild>{children}</HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCardContent sideOffset={5}>
          <Title>{title}</Title>
          <Content>{content}</Content>
          <HoverCardArrow />
        </HoverCardContent>
      </HoverCard.Portal>
    </HoverCardRoot>
  )
}

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const HoverCardRoot = styled(HoverCard.Root, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '1000px',
})

const HoverCardContent = styled(HoverCard.Content, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
  fontFamily: '$default',
  borderRadius: 6,
  padding: 20,
  width: 300,
  backgroundColor: '$gray600',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  animationDuration: '200ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
})

const HoverCardArrow = styled(HoverCard.Arrow, {
  fill: '$gray600',
})

const Title = styled('div', {
  fontSize: '$lg',
  fontWeight: '$bold',
  color: '$gray100',
})
const Content = styled('div', {
  wordBreak: 'break-all',
  fontSize: '$md',
  fontWeight: '$regular',
  color: '$gray400',
})

HoverCardComponent.displayName = 'HoverCard'
