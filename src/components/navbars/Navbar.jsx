
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/Blog.jpg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavLogo = () => {
    return (
        <a className="navbar-brand fs-1" href="/">
            <img
                className="nav-logo"
                src={logo}
                alt="Logo"
                width="30"
                height="30"
            />
        </a>
    );
};

const useNavigation = () => {
    const navigate = useNavigate();

    const navigateToPublication = () => {
        navigate("/publication");
    };

    const navigateToWelcome = () => {
        navigate("/");
    };

    return {
        navigateToPublication,
        navigateToWelcome,
    };
};

export const NavbarDocument = () => {
    const { navigateToPublication, navigateToWelcome } = useNavigation();

    return (
        <Navbar
            bg="dark"
            data-bs-theme="dark"
            fixed="top"
            expand="bg"
            className="py-1"
        >
            <Container className="w-100">
                <Navbar.Brand href="/">
                    <NavLogo />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={navigateToPublication}>Publication</Nav.Link>
                        <Nav.Link onClick={navigateToWelcome}>Welcome</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};