import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Sun, MoonFill } from 'react-bootstrap-icons'
import { useState, useEffect } from 'react'

import './NavBar.css'
const NavBar = () => {
  const [theme, setTheme] = useState('dark')
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  useEffect(() => {
    document.body.className = theme
  }, [theme])
  return (
    <Navbar
      collapseOnSelect
      dark
      expand="sm"
      bg="*"
      variant="dark"
      className={theme}
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
            <div className="ml-auto">
              <Button
                type="button"
                onClick={toggleTheme}
                className={theme}
                size="sm"
              >
                {theme === 'dark' ? (
                  <Sun className="bi bi-brightness-high"></Sun>
                ) : (
                  <MoonFill className="bi bi-moon-fill"></MoonFill>
                )}
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
