import { Navbar, Nav, Container } from 'react-bootstrap'
import './NavBar.css'
const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      scrolling
      dark
      expand="sm"
      bg="*"
      variant="dark"
      className="navBar"
    >
      <Container className="navBarContainer">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Search">Search Twitter</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Random">Random Tweets</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
