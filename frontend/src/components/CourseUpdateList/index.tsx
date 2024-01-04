import { CourseFormForModal, ModalForm, UpdateButton } from "components";
import { ListGroup } from "flowbite-react";
import { useState } from "react";
import { Course } from "types";

type Props = {
  values: Course;
  fetcher: () => Promise<void>;
};

export const CourseUpdateList = ({ values, fetcher }: Props) => {
  const [showListGroup, setShowListGroup] = useState(false);

  const [modalAboutCourseUpdate, setModalAboutCourseUpdate] = useState(false);
  const [modalAboutLessonAdd, setModalAboutLessonAdd] = useState(false);
  const [modalAboutLessonRemove, setModalAboutLessonRemove] = useState(false);
  const [modalAboutTeacherAdd, setModalAboutTeacherAdd] = useState(false);
  const [modalAboutTeacherRemove, setModalAboutTeacherRemove] = useState(false);

  const onClickListGroup = () => {
    setShowListGroup((e) => !e);
  };

  const openModalAboutCourseUpdate = () => {
    setModalAboutCourseUpdate((e) => !e);
    onClickListGroup();
  };

  const openModalAboutLessonAdd = () => {
    setModalAboutLessonAdd((e) => !e);
    onClickListGroup();
  };
  const openModalAboutLessonRemove = () => {
    setModalAboutLessonRemove((e) => !e);
    onClickListGroup();
  };

  const openModalAboutTeacherAdd = () => {
    setModalAboutTeacherAdd((e) => !e);
    onClickListGroup();
  };

  const openModalAboutTeacherRemove = () => {
    setModalAboutTeacherRemove((e) => !e);
    onClickListGroup();
  };
  

  return (
    <div className="flex mt-[18px] relative">
      <UpdateButton
        colorButton="yellow"
        colorSVG="#374151"
        actionOnClick={onClickListGroup}
        className=""
      />
      {showListGroup && (
        <ListGroup
          className="absolute
          left-0 mt-11 ml-[-85px] bg-white border border-gray-300 rounded shadow"
        >
          <ListGroup.Item onClick={openModalAboutCourseUpdate}>
            Atualizar Curso
          </ListGroup.Item>
          <ListGroup.Item onClick={openModalAboutLessonAdd}>
            Adicionar Aula
          </ListGroup.Item>
          <ListGroup.Item onClick={openModalAboutLessonRemove}>
            Remover Aula
          </ListGroup.Item>
          <ListGroup.Item onClick={openModalAboutTeacherAdd}>
            Adicionar Professor
          </ListGroup.Item>
          <ListGroup.Item onClick={openModalAboutTeacherRemove}>
            Remover Professor
          </ListGroup.Item>
        </ListGroup>
      )}
      <ModalForm
        title="Atualizar Curso"
        openModal={modalAboutCourseUpdate}
        setOpenModal={setModalAboutCourseUpdate}
      >
        <CourseFormForModal
          type="update"
          buttonName="Atualizar"
          fetcher={fetcher}
          values={values}
        />
      </ModalForm>
      <ModalForm
        title="Adicionar Aula"
        openModal={modalAboutLessonAdd}
        setOpenModal={setModalAboutLessonAdd}
      ></ModalForm>
      <ModalForm
        title="Remover Aula"
        openModal={modalAboutLessonRemove}
        setOpenModal={setModalAboutLessonRemove}
      ></ModalForm>
      <ModalForm
        title="Adicionar Professor"
        openModal={modalAboutTeacherAdd}
        setOpenModal={setModalAboutTeacherAdd}
      ></ModalForm>
      <ModalForm
        title="Remover Professor"
        openModal={modalAboutTeacherRemove}
        setOpenModal={setModalAboutTeacherRemove}
      ></ModalForm>

    </div>
  );
};
