import { Navbar, NavbarLink } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "shared/contexts";

export const NavBar = () => {
  const { user, signout } = useAuthContext();

  const navLinks = [
    {
      link: "/home",
      name: "Home",
    },
    {
      link: user ? "/meus-cursos" : "/login",
      name: "Meus Cursos",
    },
    {
      link: "/home",
      name: "Contatos",
    },
  ];

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
            <NavLink
              key={e.name}
              className="text-gray-700 cursor-pointer hover:text-cyan-700 "
              to={e.link}
            >
              {e.name}
            </NavLink>
          );
        })}
        {!user ? (
          <NavLink to={"/login"} className="text-indigo-500">
            Entrar
          </NavLink>
        ) : (
          <NavbarLink
            onClick={signout}
            className="text-gray-700 cursor-pointer hover:text-cyan-700"
          >
            Sair
          </NavbarLink>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};
