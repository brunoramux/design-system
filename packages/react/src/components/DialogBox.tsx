import React, { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { keyframes } from '@stitches/react'
import { Cross2Icon } from '@radix-ui/react-icons'
import { styled } from '../styles'

export interface DialogProps {
  title: string
  description: string
  children: ReactNode
}
export const DialogBox = ({ title, description, children }: DialogProps) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>{children}</Dialog.Trigger>
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
        <Dialog.Close asChild>
          <IconButton aria-label="Close">
            <Cross2Icon />
          </IconButton>
        </Dialog.Close>
      </DialogContent>
    </Dialog.Portal>
  </Dialog.Root>
)

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: '$gray500',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

const DialogContent = styled(Dialog.Content, {
  fontFamily: '$default',
  backgroundColor: '$gray900',
  borderRadius: 6,
  border: '1px solid $ignite500',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '120vw',
  maxWidth: '450px',
  maxHeight: '200px',
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' },
})

const DialogTitle = styled(Dialog.Title, {
  margin: 0,
  fontWeight: 500,
  color: '$white',
  fontSize: 17,
})

const DialogDescription = styled(Dialog.Description, {
  wordBreak: 'break-all',
  margin: '10px 0 20px',
  color: '$gray400',
  fontSize: 15,
  lineHeight: 1.5,
})

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  height: 20,
  width: 20,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray200',
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': { backgroundColor: '$gray100' },
})

DialogBox.displayName = 'DialogBox'
