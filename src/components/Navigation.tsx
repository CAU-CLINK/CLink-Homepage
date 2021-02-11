import { Drawer } from 'antd'
import Hamburger from 'hamburger-react'
import styled from 'styled-components'
import useBoolean from 'src/hooks/useBoolean'

const StyledNavigation = styled.nav`
  margin: 1rem;
`

const Padding = styled.div`
  height: min-content;
  padding: 5rem 0 0 0;
  text-align: right;
`

const StyledA = styled.a`
  color: #000000;
  text-decoration: none;
  font-family: Poppins;
  font-size: 20px;
  line-height: 20px;
`

function Navigation() {
  const [isDrawerOpen, , showDrawer, hideDrawer] = useBoolean(false)

  return (
    <StyledNavigation>
      <Hamburger toggled={isDrawerOpen} toggle={showDrawer} />
      <Drawer
        closeIcon={<Hamburger toggled={isDrawerOpen} />}
        mask={false}
        onClose={hideDrawer}
        placement="right"
        visible={isDrawerOpen}
      >
        <Padding>
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
        </Padding>
      </Drawer>
    </StyledNavigation>
  )
}

export default Navigation
