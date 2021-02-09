import styled from 'styled-components'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import { Drawer } from 'antd'
import 'antd/dist/antd.css'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 200px;
  height: 100vh;
`

const NavIcon = styled.div`
  z-index: 3;
  position: fixed;
  top: 0;
  right: 10px;
`

const NavList = styled.div`
  z-index: 0;
  width: 200px;
  height: '100vh';
  right: 0;
  top: 0;
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

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

// eslint-disable-next-line no-empty-pattern
function Navigation({}: Props) {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  return (
    <Nav>
      <NavList>
        <NavIcon>
          <Hamburger
            onToggle={(toggled) => {
              if (toggled) {
                showDrawer()
              } else {
                onClose()
              }
            }}
          />
        </NavIcon>
        <Drawer
          placement="top"
          closable={false}
          onClose={onClose}
          visible={visible}
          getContainer={false}
          mask={false}
          height="100%"
          drawerStyle={{ marginTop: 50, textAlign: 'right' }}
          style={{ position: 'absolute', right: 0, width: 200, zIndex: 1 }}
        >
          <StyledA href="/about">
            <p>ABOUT</p>
          </StyledA>
          <StyledA href="/projects">
            <p>PROJECTS</p>
          </StyledA>
          <StyledA href="/team">
            <p>MEMBERS</p>
          </StyledA>
          <StyledA href="/contact">
            <p>CONTACTS</p>
          </StyledA>
        </Drawer>
      </NavList>
    </Nav>
  )
}

export default Navigation
