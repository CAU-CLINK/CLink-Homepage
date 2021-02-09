import { ReactNode } from 'react'
import styled from 'styled-components'

const TitleDiv = styled.div`
  text-align: center;
`

const TitleText = styled.h1`
  font-size: min(9rem, 20vw);
  white-space: nowrap;
  font-family: poppin;
  font-weight: 800;
`

type Props = {
  children: ReactNode
}

function PageHeader({ children }: Props) {
  return (
    <TitleDiv>
      <TitleText>{children}</TitleText>
    </TitleDiv>
  )
}

export default PageHeader
