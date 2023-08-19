import * as React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { keyframes, styled } from '../styles'
import './styles.css'

export interface AccordionProps {
  content: []
}

export function AccordionComponent({ content }: AccordionProps) {
  return (
    <AccordionRoot type="single">
      {content.map(({ title, description }) => {
        return (
          <AccordionItem value={title} key={title}>
            <StyledHeader>
              <StyledTrigger className="AccordionTrigger">
                <span>{title}</span>
                <StyledChevron className="AccordionChevron" aria-hidden />
              </StyledTrigger>
            </StyledHeader>
            <StyledContent>{description}</StyledContent>
          </AccordionItem>
        )
      })}
    </AccordionRoot>
  )
}

const AccordionRoot = styled(Accordion.Root, {
  borderRadius: 6,
  width: 1000,
  backgroundColor: '$gray500',
  boxShadow: `0 2px 10px $black`,
})

const AccordionItem = styled(Accordion.Item, {
  overflow: 'hidden',
  marginTop: 1,

  '&:first-child': {
    marginTop: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  '&:last-child': {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
  },
})

const StyledHeader = styled(Accordion.Header, {
  all: 'unset',
  display: 'flex',
})

const StyledTrigger = styled(Accordion.Trigger, {
  all: 'unset',
  fontFamily: '$default',
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: 15,
  lineHeight: 1,
  color: '$white',
  backgroundColor: '$gray600',
  '&:hover': { opacity: '70%' },
})

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
})

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
})

const StyledContent = styled(Accordion.Content, {
  padding: '15px 20px',
  fontFamily: '$default',
  overflow: 'hidden',
  fontSize: 15,
  color: '$white',
  backgroundColor: '$gray500',

  '&[data-state="open"]': {
    animation: `${slideDown} 200ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 200ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
})

const StyledChevron = styled(ChevronDownIcon, {
  color: '$gray100',
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
})

AccordionComponent.displayName = 'Accordion'
