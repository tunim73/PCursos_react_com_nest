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
  const [modalAboutTeacherUpdate, setModalAboutTeacherUpdate] = useState(false);
  const [modalAboutLessonUpdate, setModalAboutLessonUpdate] = useState(false);

  const onClickListGroup = () => {
    setShowListGroup((e) => !e);
  };

  const openModalAboutCourseUpdate = () => {
    setModalAboutCourseUpdate((e) => !e);
    onClickListGroup();
  };
  const openModalAboutTeacherUpdate = () => {
    setModalAboutTeacherUpdate((e) => !e);
    onClickListGroup();
  };
  const openModalAboutLessonUpdate = () => {
    setModalAboutLessonUpdate((e) => !e);
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
          <ListGroup.Item onClick={openModalAboutTeacherUpdate}>
            Atualizar Professores
          </ListGroup.Item>
          <ListGroup.Item onClick={openModalAboutLessonUpdate}>
            Atualizar Aulas
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
        title="Atualizar Professores"
        openModal={modalAboutTeacherUpdate}
        setOpenModal={setModalAboutTeacherUpdate}
      ></ModalForm>
      <ModalForm
        title="Atualizar Aulas"
        openModal={modalAboutLessonUpdate}
        setOpenModal={setModalAboutLessonUpdate}
      ></ModalForm>

      {/* 
        <ModalForm
            title="Novo Curso"
            openModal={openModal}
            setOpenModal={setOpenModal}
          >
              
          </ModalForm>
      */}
    </div>
  );
};
