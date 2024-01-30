import { Footer as Ft } from "flowbite-react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <Ft container>
        <Ft.Copyright by="PCursos™" year={2024} />
        <Ft.LinkGroup className="flex gap-4">
          <NavLink to="#">Sobre</NavLink>
          <NavLink to="#">Contato</NavLink>
          <a
            href="https://www.linkedin.com/in/antonio-netto-021458222/"
            target="_blank"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/tunim73/PCursos_react_com_nest.git"
            target="_blank"
          >
            Repositório
          </a>
        </Ft.LinkGroup>
      </Ft>
    </>
  );
};
