import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import styled from 'styled-components'

const StyledA = styled.a<{ isTextColorBlack: boolean }>`
  margin: 0.5rem;
  font-family: Poppins;
  color: ${(p) => (p.isTextColorBlack ? 'black' : 'grey')};
`

function InternationalizedLink() {
  const router = useRouter()

  return (
    <>
      <Link href={router.pathname} locale="ko">
        <StyledA href={router.pathname} isTextColorBlack={router.locale === 'ko'}>
          KOR
        </StyledA>
      </Link>
      <Link href={router.pathname} locale="en">
        <StyledA href={router.pathname} isTextColorBlack={router.locale === 'en'}>
          ENG
        </StyledA>
      </Link>
    </>
  )
}

export default InternationalizedLink
