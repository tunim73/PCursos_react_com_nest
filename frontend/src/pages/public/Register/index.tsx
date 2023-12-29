import { LoginForm } from "components";
import { useNavigate } from "react-router-dom";
import { studentApi, teacherApi } from "services";
import { FieldsRegister, isApiException, typeFieldsLoginForm } from "types";
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
  const navigate = useNavigate();

  const actionOnSubmit = async (
    data: FieldsRegister,
    setError: SetErrorOfForm
  ) => {
    if (!data) return;
    if (data.password !== data.password2) {
      setError("password2", {
        type: "password2 incorreto",
        message: "As senhas devem ser iguais",
      });
      return;
    }

    if (data.type === "student") {
      const newStudent = await studentApi.create(
        data.name,
        data.email,
        data.password
      );

      if (!newStudent) {
        //toast.warning("Erro no Servidor !");
        return;
      }
      if (isApiException(newStudent)) {
        if (newStudent.message === "aluno já cadastrado")
          setError("email", {
            type: "aluno já cadastrado",
            message: "aluno já cadastrado",
          });
        return;
      }
      //toast.success("Usuário cadastrado com sucesso !");
      navigate("/login");

      return;
    }

    if (data.type === "teacher") {
      const newTeacher = await teacherApi.create(
        data.name,
        data.email,
        data.password
      );

      if (!newTeacher) {
        //toast.warning("Erro no Servidor !");
        return;
      }
      if (isApiException(newTeacher)) {
        if (newTeacher.message === "professor já cadastrado")
          setError("email", {
            type: "professor já cadastrado",
            message: "professor já cadastrado",
          });
        return;
      }
      //toast.success("Usuário cadastrado com sucesso !");
      navigate("/login");
      return;
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
