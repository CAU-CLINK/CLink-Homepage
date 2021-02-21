import { Drawer } from 'antd'
import Hamburger from 'hamburger-react'
import Link from 'next/link'
import styled from 'styled-components'
import useBoolean from 'src/hooks/useBoolean'

const Margin = styled.nav`
  margin: 1rem;
`

const Padding = styled.nav`
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
    <Margin>
      <Hamburger toggled={isDrawerOpen} toggle={showDrawer} />
      <Drawer
        closeIcon={<Hamburger toggled={isDrawerOpen} />}
        mask={false}
        onClose={hideDrawer}
        placement="right"
        visible={isDrawerOpen}
      >
        <Padding>
          <Link href="/about">
            <StyledA href="/about">
              <p>ABOUT</p>
            </StyledA>
          </Link>
          <Link href="/projects">
            <StyledA href="/projects">
              <p>PROJECTS</p>
            </StyledA>
          </Link>
          <Link href="/members">
            <StyledA href="/members">
              <p>MEMBERS</p>
            </StyledA>
          </Link>
          <Link href="/contact">
            <StyledA href="/contact">
              <p>CONTACT</p>
            </StyledA>
          </Link>
        </Padding>
      </Drawer>
    </Margin>
  )
}

export default Navigation
