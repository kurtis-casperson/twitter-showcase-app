import { Navbar, Nav, Container } from 'react-bootstrap'

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Navbar.Link href="/">Home</Navbar.Link>
              <Navbar.Link href="/Search">Search Twitter</Navbar.Link>
              <Navbar.Link href="/Random">Random Tweets</Navbar.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
