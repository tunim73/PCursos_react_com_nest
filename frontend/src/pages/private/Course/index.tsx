import {
  CourseFormForModal,
  LessonCard,
  ModalForm,
  UpdateButton,
} from "components";
import { Button, ListGroup } from "flowbite-react";
import { useState } from "react";
import { useAuthContext } from "shared/contexts";
import { useCourse } from "shared/hooks/useCourse";
import { categoriesString } from "shared/util";

export const Course = () => {
  const { course } = useCourse();
  const { user } = useAuthContext();

  const [showListGroup, setShowListGroup] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const onClickListGroup = () => {
    setShowListGroup((e) => !e);
  };

  const onClickSetOpenModal = () => {
    setOpenModal((e) => !e);
  };

  return (
    <div className="w-full h-full lg:px-24 md:px-24 px-3">
      <div className="w-full flex justify-between gap-2">
        <h2 className="text-2xl font-bold text-gray-700 mt-2 ">
          {course.title}
        </h2>
        {user?.type === "teacher" && (
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
                <ListGroup.Item>Atualizar Curso</ListGroup.Item>
                <ListGroup.Item>Atualizar Professores</ListGroup.Item>
                <ListGroup.Item>Atualizar Aulas</ListGroup.Item>
              </ListGroup>
            )}

            {/* <ModalForm
              title="Atualizar Curso"
              openModal={openModal}
              setOpenModal={setOpenModal}
            >
              <CourseFormForModal
                type="update"
                buttonName="Atualizar"
                values={course}
              />
            </ModalForm> */}
          </div>
        )}
      </div>
      <div className="ml-1 mb-8">
        <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
          <span className="font-bold text-gray-700 dark:text-gray-400">
            Categoria(s):{" "}
          </span>
          {categoriesString(course.categories)}
        </p>
        <p className="font-normal text-sm text-gray-700 dark:text-gray-400 max-w-[34rem] break-words">
          <span className="font-bold text-gray-700 dark:text-gray-400">
            Descrição:{" "}
          </span>
          {course.description}
          fewffffffffffff ffffffff ffffff fffff fffff f ff fffff afeeeeeeeeeee ee eee eeeeeeee eeee eeeeeeee eeeeeeee eeeeeeeee eeeeeeeeeeeeeeeeeee
        </p>
      </div>
      <section className="flex flex-col w-full justify-center items-center gap-8">
        {course.lessons?.map((item) => {
          return (
            <LessonCard
              key={item.id}
              id={item.id}
              name={item.name}
              watched={item.watched}
              lessonType={item.lessonType}
              embed={item.embed}
            />
          );
        })}
      </section>

      {/* <section className="flex justify-center gap-10 flex-wrap">
        {courses.map((course) => {
          return (
            <CourseCard
              key={course.id}
              categories={course.categories}
              description={course.description}
              id={course.id}
              title={course.title}
              image={course.image}
            />
          );
        })}
      </section> */}
    </div>
  );
};
