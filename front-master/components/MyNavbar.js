
import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'





class MyNavbar extends React.Component {
    render () {
        return  <Navbar bg="info" expand="lg">
                    <Container background="#101010">
                        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                            <Nav className="me-auto" background-color="#101010" >
                                <Nav.Link href="/home_page"><b>Glavna</b></Nav.Link>
                                <Nav.Link href="/graphs/predef_id_res">Primarni ključ</Nav.Link>
                                <Nav.Link href="/graphs/predef_id_try_res">Negarantovani ključ</Nav.Link>
                                <Nav.Link href="/graphs/predef_join_res">Spoj</Nav.Link>
                                <Nav.Link href="/graphs/predef_lt_res">Manje</Nav.Link>
                                <Nav.Link href="/graphs/predef_min_res">Minimum</Nav.Link>
                                <Nav.Link href="/graphs/predef_max_res">Maksimum</Nav.Link>
                                <Nav.Link href="/graphs/predef_substr_res">Podstring</Nav.Link>
                                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown> */}
                            </Nav>
                        {/* </Navbar.Collapse> */}
                    </Container>
                </Navbar>
    }

    

}

export default MyNavbar;

