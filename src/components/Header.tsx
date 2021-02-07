import CLinkLogo from './atoms/CLinkLogo'
import Navigation from './Navigation'
import styled from 'styled-components'

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
`

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

// eslint-disable-next-line no-empty-pattern
function Header({}: Props) {
  return (
    <header style={{ position: 'fixed', zIndex: 1, margin: '10px' }}>
      <CLinkLogo />

      <Navigation />
    </header>
  )
}

export default Header
