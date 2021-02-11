import { HEADER_HEIGHT } from 'src/models/constants'
import styled from 'styled-components'
import CLinkLogo from './atoms/CLinkLogo'
import InternationalizedLink from './InternationalizedLink'
import Navigation from './Navigation'

const FixedHeader = styled.header`
  width: 100%;
  height: ${HEADER_HEIGHT};
  position: fixed;
  top: 0;
  z-index: 1;

  background-color: #fff;
`

const FlexContainer1 = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const FlexContainer2 = styled.div`
  min-width: 100px;
  max-width: calc(${HEADER_HEIGHT} * 2.2 - 1rem);
  padding: 0.5rem;

  display: flex;
  align-items: center;
`

const FlexContainer3 = styled.div`
  display: flex;
  justify-content: space-between;
`

function Header() {
  return (
    <FixedHeader>
      <FlexContainer1>
        <FlexContainer2>
          <CLinkLogo />
        </FlexContainer2>
        <FlexContainer3>
          <InternationalizedLink />
          <Navigation />
        </FlexContainer3>
      </FlexContainer1>
    </FixedHeader>
  )
}

export default Header
