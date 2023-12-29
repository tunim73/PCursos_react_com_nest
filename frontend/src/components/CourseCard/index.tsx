import { Card } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { CategoriesString } from "shared/util";

import { Course } from "types";

export const CourseCard = ({ title, categories, id, image }: Course) => {
  const categoriesString = CategoriesString(categories);

  return (
    <div className="">
      <Card className="max-w-sm" imgSrc={image} horizontal>
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold text-gray-700 dark:text-gray-400">
            Categoria(s):{" "}
          </span>
          {categoriesString()}
        </p>

        <NavLink
          to={`/curso/${id}`}
          className={"inline-flex items-center text-blue-600 hover:underline"}
        >
          {"-> Saiba mais <-"}
        </NavLink>
      </Card>
    </div>
  );
};
