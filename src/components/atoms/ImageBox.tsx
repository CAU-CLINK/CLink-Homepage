import { ReactNode } from 'react'
import styled from 'styled-components'

const FlexContainer = styled.div<{ rightImage: boolean }>`
  display: flex;
  flex-flow: ${(p) => (p.rightImage ? 'row-reverse' : 'row')} nowrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

const FlexContainerColumn = styled.div<{ rightImage: boolean }>`
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;

  & :last-child {
    text-align: ${(p) => (p.rightImage ? 'right' : 'left')};
  }
`

type Props = {
  children: ReactNode[]
  rightImage?: boolean
}

/**
 * @param children [0] Image
 * @param children [1] Title
 * @param children [2] Description
 */
function ImageBox({ children, rightImage = false }: Props) {
  return (
    <FlexContainer rightImage={rightImage}>
      {children[0]}
      <FlexContainerColumn rightImage={rightImage}>
        {children[1]}
        {children[2]}
      </FlexContainerColumn>
    </FlexContainer>
  )
}

export default ImageBox
