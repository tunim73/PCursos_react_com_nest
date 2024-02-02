import { Button, Label, Select } from "flowbite-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { courseApi } from "services";
import { useAuthContext } from "shared/contexts";
import { User } from "types";

type Props = {
  fetcher: () => Promise<void>;
  values: User[];
  setCloseModal: () => void;
};

export const TeacherRemoveForm = ({
  fetcher,
  values,
  setCloseModal,
}: Props) => {
  const { register, handleSubmit } = useForm<{ teacherId: number }>();
  const { user } = useAuthContext();
  const { id } = useParams();

  useEffect(() => {
    if (!values) return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    if (!user) return;

    const oldTeacher = await courseApi.removeTeacherInCourse(
      Number(id),
      data.teacherId
    );

    if (oldTeacher === true) {
      toast.success("Professor removido com sucesso!");
      fetcher();
      setCloseModal();
      return;
    }
    toast.error("Erro ao deletar professor: ");
    return;
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-2">
        <div className="mb-2 block">
          <Label htmlFor="name" value="Selecione um professor" />
        </div>
        <Select {...register("teacherId")} defaultValue={"Selecione uma opção"}>
          {values.map((e) => {
            return (
              <option value={e.id} key={e.id}>
                {e.name}
              </option>
            );
          })}
          <option disabled value={"Selecione uma opção"}>
            Selecione uma opção
          </option>
        </Select>
      </div>
      <div className="w-full mt-4">
        <Button type="submit">Remover</Button>
      </div>
    </form>
  );
};
