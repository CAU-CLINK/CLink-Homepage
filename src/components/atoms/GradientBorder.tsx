import { ReactNode } from 'react'
import styled from 'styled-components'

const Gradient = styled.div<{ borderSize: string }>`
  padding: ${(p) => p.borderSize};
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 0.01%,
      rgba(255, 255, 255, 0.09) 100%
    ),
    linear-gradient(90deg, #fd4444 0%, #6a3bf0 100%);
`

type Props = {
  children: ReactNode
  borderSize: string
}

function GradientBorder({ children, borderSize }: Props) {
  return <Gradient borderSize={borderSize}>{children}</Gradient>
}

export default GradientBorder
