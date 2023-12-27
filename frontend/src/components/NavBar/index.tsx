import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Navbar fluid rounded className="">
      <Navbar.Brand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-cyan-700">
          PCursos
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="ml-2">
        <Navbar.Link as={Link} href="#">
          Cursos
        </Navbar.Link>
        <Navbar.Link href="#">Contatos</Navbar.Link>
        <Navbar.Link href="/login" active>
          Entrar
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
