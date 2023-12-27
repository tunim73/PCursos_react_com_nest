import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="/home">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-indigo-500">
          PCursos
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="ml-2">
        <Navbar.Link href="/home">Home</Navbar.Link>
        <Navbar.Link href="#">
          Cursos
        </Navbar.Link>
        <Navbar.Link href="#">Contatos</Navbar.Link>
        <Navbar.Link href="/login" className="text-indigo-500">
          Entrar
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );  
};
