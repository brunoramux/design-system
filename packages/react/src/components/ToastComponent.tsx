import * as React from 'react'
import * as Toast from '@radix-ui/react-toast'
import { keyframes } from '@stitches/react'
import { styled } from '../styles'
import { Cross1Icon } from '@radix-ui/react-icons'

export interface ToastProps {
  title: string
  content: string
  children: React.ReactNode
}

export function ToastComponent({ title, content, children }: ToastProps) {
  React.useEffect(() => {
    const botao = document.getElementById('child')
    if (botao) {
      botao.onclick = () => {
        setOpen(false)
        window.clearTimeout(timerRef.current)
        timerRef.current = window.setTimeout(() => {
          setOpen(true)
        }, 100)
      }
    }
  }, [])
  const [open, setOpen] = React.useState(false)
  const timerRef = React.useRef(0)

  return (
    <Toast.Provider swipeDirection="right">
      {children}
      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastTitle>
          <span>{title}</span>
          <ToastContent>{content}</ToastContent>
        </ToastTitle>

        <ToastAction asChild altText="Undo">
          <Cross1Icon />
        </ToastAction>
      </ToastRoot>
      <ToastViewport />
    </Toast.Provider>
  )
}

const VIEWPORT_PADDING = 25

const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  padding: VIEWPORT_PADDING,
  gap: 4,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

const ToastRoot = styled(Toast.Root, {
  backgroundColor: '$gray600',
  width: '360px',
  height: '60px',
  borderRadius: 6,
  padding: '14px 24px',
  display: 'inline-flex',
  justifyContent: 'space-between',
  border: '1px solid $gray600',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

const ToastTitle = styled(Toast.Title, {
  fontFamily: '$default',
  fontWeight: '$bold',
  color: '$white',
  fontSize: 20,
})

const ToastContent = styled('div', {
  fontFamily: '$default',
  marginTop: 10,
  color: '$gray200',
  fontSize: 14,
  lineHeight: '22.4px',
  fontWeight: '$regular',
})

const ToastAction = styled(Toast.Action, {
  height: 25,
  width: 25,
  display: 'inline-flex',
  fontWeight: '$regular',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray100',
  top: 10,
  right: 10,

  '&:hover': { backgroundColor: '$ignite300' },
})

ToastComponent.displayName = 'Toast'
