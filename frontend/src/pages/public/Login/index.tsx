import { LoginForm } from "components";
import { typeFieldsLoginForm } from "types";

const fieldsLoginForm: typeFieldsLoginForm[] = [
  {
    id: "email",
    label: "Seu email",
    type: "email",
    placeholder: "email@email.com",
    required: true,
  },
  {
    id: "password",
    label: "Sua senha",
    type: "password",
    placeholder: "**********",
    required: true,
  },
];

const alternativeLink = {
  link: "/register",
  name: "cadastrar-se",
};

type fieldsLogin = {
  email: string;
  password: string;
  professor: boolean;
};

export const Login = () => {
  const actionOnSubmit = (data: fieldsLogin, setError: any) => {
    console.log("data: ", data);
  };

  return (
    <div className="">
      <LoginForm
        fields={fieldsLoginForm}
        buttonName={"Entrar"}
        alternativeLink={alternativeLink}
        actionOnSubmit={actionOnSubmit}
      />
    </div>
  );
};
