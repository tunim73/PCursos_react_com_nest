import { LoginForm } from "components";
import { typeFieldsLoginForm } from "types";

const fieldsRegisterForm: typeFieldsLoginForm[] = [
  {
    id: "name",
    label: "Nome",
    type: "text",
    placeholder: "name",
    required: true,
  },
  {
    id: "email",
    label: "email",
    type: "email",
    placeholder: "email@email.com",
    required: true,
  },
  {
    id: "password",
    label: "senha",
    type: "password",
    placeholder: "**********",
    required: true,
  },
  {
    id: "password2",
    label: "Confirme sua senha",
    type: "password",
    placeholder: "**********",
    required: true,
  },
];

type fieldsRegister = {
  name: string;
  email: string;
  password: string;
  password2: string;
  type: string;
};

const alternativeLink = {
  link: "/login",
  name: "Fazer login",
};

export const Register = () => {
  const actionOnSubmit = (data: fieldsRegister, setError: any) => {
    if (!data) return;
    console.log("data: ", data);
    if (data.password !== data.password2) {
      setError("password2", {
        type: "password2 incorreto",
        message: "As senhas devem ser iguais",
      });
    }
  };

  return (
    <div>
      <LoginForm
        fields={fieldsRegisterForm}
        buttonName={"Cadastre-se"}
        alternativeLink={alternativeLink}
        actionOnSubmit={actionOnSubmit}
      />
    </div>
  );
};
