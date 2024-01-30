import { NavLink } from "react-router-dom";
import { useAuthContext } from "shared/contexts";
import { BasicLayout } from "..";

export const LayoutWithAuth = () => {
  const { user } = useAuthContext();

  if (user) {
    return <BasicLayout />;
  } else {
    return (
      <>
        <NavLink to="/login">
          {" "}
          Usuário não autenticado! Clique aqui para realizar login ou
          cadastrar-se.{" "}
        </NavLink>
      </>
    );
  }
};
