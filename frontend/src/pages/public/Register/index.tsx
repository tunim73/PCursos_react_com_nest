import { LoginForm } from "components";
import { FieldsRegister, typeFieldsLoginForm } from "types";
import { SetErrorOfForm } from "types/SetErrorOfForm";

const fieldsRegisterForm: typeFieldsLoginForm[] = [
  {
    id: "name",
    label: "Nome",
    type: "text",
    placeholder: "Remando...",
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

const alternativeLink = {
  link: "/login",
  name: "Fazer login",
};

export const Register = () => {
  const actionOnSubmit = (data: FieldsRegister, setError: SetErrorOfForm) => {
    if (!data) return;
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
