import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    link: "/home",
    name: "Home",
  },
  {
    link: "/home",
    name: "Cursos",
  },
  {
    link: "/home",
    name: "Contatos",
  },
];

export const NavBar = () => {
  return (
    <Navbar fluid rounded>
      <NavLink to="/home">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-indigo-500">
          PCursos
        </span>
      </NavLink>
      <Navbar.Toggle />
      <Navbar.Collapse className="ml-2">
        {navLinks.map((e) => {
          return (
            <NavLink key={e.name} className="text-gray-700" to={e.link}>
              {e.name}
            </NavLink>
          );
        })}
        <NavLink to={"/login"} className="text-indigo-500">
          Entrar
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};
