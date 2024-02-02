import { Button, Label, Select } from "flowbite-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { lessonApi } from "services";
import { useAuthContext } from "shared/contexts";
import { Lesson } from "types";

type Props = {
  fetcher: () => Promise<void>;
  values: Lesson[];
  setCloseModal: () => void;
};

export const LessonRemoveForm = ({ fetcher, values, setCloseModal }: Props) => {
  const { register, handleSubmit } = useForm<{ LessonId: number }>();
  const { user } = useAuthContext();

  useEffect(() => {
    if (!values) return;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    if (!user) return;

    const oldLesson = await lessonApi.delete(Number(data.LessonId));

    if (oldLesson === true) {
      toast.success("Aula adicionada com sucesso !");
      fetcher();
      setCloseModal();
      return;
    }
    toast.error("Erro ao deletar aula");
    return;
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-2">
        <div className="mb-2 block">
          <Label htmlFor="name" value="Selecione a aula" />
        </div>
        <Select {...register("LessonId")} defaultValue={"Selecione uma opção"}>
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
