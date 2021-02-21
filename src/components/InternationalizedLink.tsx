import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import styled from 'styled-components'

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Border = styled.div`
  border: 1px solid grey;
  height: 1rem;
`

const StyledA = styled.a<{ isTextColorBlack: boolean }>`
  margin: 0.5rem;
  font-family: Poppins;
  color: ${(p) => (p.isTextColorBlack ? 'black' : '#aaa')};
  word-break: keep-all;
`

function InternationalizedLink() {
  const router = useRouter()

  return (
    <FlexContainer>
      <Link href={router.pathname} locale="ko">
        <StyledA href={router.pathname} isTextColorBlack={router.locale === 'ko'}>
          KOR
        </StyledA>
      </Link>
      <Border />
      <Link href={router.pathname} locale="en">
        <StyledA href={router.pathname} isTextColorBlack={router.locale === 'en'}>
          ENG
        </StyledA>
      </Link>
    </FlexContainer>
  )
}

export default InternationalizedLink
