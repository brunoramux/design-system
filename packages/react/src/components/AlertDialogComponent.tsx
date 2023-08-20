import React, { ReactNode } from 'react'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { keyframes } from '@stitches/react'
import { styled } from '../styles'

export interface AlertDialogProps {
  title: string
  description: string
  children: ReactNode
}
export function AlertDialogComponent({
  title,
  description,
  children,
}: AlertDialogProps) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
          <Flex css={{ justifyContent: 'flex-end' }}>
            <AlertDialog.Cancel asChild>
              <Button variant="ignite500" css={{ marginRight: 25 }}>
                Cancelar
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button variant="ignite500">Confirmar</Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialogContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

const AlertDialogOverlay = styled(AlertDialog.Overlay, {
  backgroundColor: '$gray500',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

const AlertDialogContent = styled(AlertDialog.Content, {
  fontFamily: '$default',
  backgroundColor: '$gray900',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '500px',
  maxHeight: '85vh',
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

  '&:focus': { outline: 'none' },
})

const AlertDialogTitle = styled(AlertDialog.Title, {
  margin: 0,
  color: '$white',
  fontSize: 17,
  fontWeight: 500,
})

const AlertDialogDescription = styled(AlertDialog.Description, {
  wordBreak: 'break-all',
  marginBottom: 20,
  color: '$gray400',
  fontSize: 15,
  lineHeight: 1.5,
})

const Flex = styled('div', { display: 'flex' })

const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: '$bold',
  height: 35,
  cursor: 'pointer',

  variants: {
    variant: {
      ignite500: {
        backgroundColor: '$ignite500',
        color: '$white',
        boxShadow: `0 2px 10px $black`,
        '&:hover': { backgroundColor: '$ignite300' },
        '&:focus': { boxShadow: `0 0 0 2px black` },
      },
    },
  },

  defaultVariants: {
    variant: 'ignite500',
  },
})

AlertDialogComponent.displayName = 'AlertDialog'
