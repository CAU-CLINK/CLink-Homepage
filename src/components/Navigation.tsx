import { Drawer } from 'antd'
import Hamburger from 'hamburger-react'
import styled, { CSSProperties } from 'styled-components'
import useBoolean from 'src/hooks/useBoolean'

const StyledNavigation = styled.nav`
  margin: 1rem;
`

const StyledA = styled.a`
  color: #000000;
  text-decoration: none;
  font-family: Poppins;
  font-size: 20px;
  line-height: 20px;
  :hover,
  :focus,
  :active {
    color: gray;
  }
`

const DrawerStyle: CSSProperties = { marginTop: 50, textAlign: 'right' }

function Navigation() {
  const [isDrawerOpen, , showDrawer, hideDrawer] = useBoolean(false)

  return (
    <StyledNavigation>
      <Hamburger toggled={isDrawerOpen} toggle={showDrawer} />
      <Drawer
        closeIcon={<Hamburger toggled={isDrawerOpen} />}
        drawerStyle={DrawerStyle}
        onClose={hideDrawer}
        placement="right"
        visible={isDrawerOpen}
      >
        <StyledA href="/about">
          <p>ABOUT</p>
        </StyledA>
        <StyledA href="/projects">
          <p>PROJECTS</p>
        </StyledA>
        <StyledA href="/members">
          <p>MEMBERS</p>
        </StyledA>
        <StyledA href="/contact">
          <p>CONTACT</p>
        </StyledA>
      </Drawer>
    </StyledNavigation>
  )
}

export default Navigation
