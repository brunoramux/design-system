import * as Tooltip from '@radix-ui/react-tooltip'
import { keyframes } from '@stitches/react'
import { styled } from '../styles'
import React, { ReactNode } from 'react'

export interface TooltipProps {
  content: string
  children: ReactNode
}

export function TooltipComponent({ content, children }: TooltipProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <Tooltip.Portal>
          <TooltipContent sideOffset={5}>
            {content}
            <TooltipArrow />
          </TooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(10 px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-10px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-10px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(10px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const TooltipContent = styled(Tooltip.Content, {
  wordBreak: 'break-all',
  fontFamily: '$default',
  borderRadius: 5,
  padding: '12px 16px',
  fontWeight: '$regular',
  fontSize: 14,
  lineHeight: '1rem',
  color: '$gray100',
  backgroundColor: '$gray900',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  userSelect: 'none',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
})

const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$black',
})

const TooltipTrigger = styled(Tooltip.Trigger, {
  // all: 'unset',
  fontFamily: '$default',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray600',
  backgroundColor: 'white',
})

TooltipComponent.displayName = 'Tooltip'
