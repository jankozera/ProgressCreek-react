import React, { FC, useState } from "react";

import { FaCheck } from "react-icons/fa";
import actions from "../../api/lessons";
import img from "../../assets/arrow-right.png";

type LessonItemProps = {
  id: number;
  index: number;
  title: string;
  description: string;
  youtubeLink?: string;
  content?: string;
  completed?: boolean;
  active: boolean;
  onClick: Function;
};

const LessonItem: FC<LessonItemProps> = ({
  id,
  index,
  title,
  description,
  youtubeLink,
  content,
  completed,
  active,
  onClick,
}) => {
  const [toggled, setToggled] = useState(false);
  const handleComplete = () => {
    const data: any = {};
    if (youtubeLink) {
      data["video"] = id;
    }
    if (content) {
      data["reading"] = id;
    }
    actions.completeLesson(data).then((res) => setToggled(true));
  }
  
  return (
    <div
      className={`py-4 pl-8 border-b border-l border-black-primary ${
        active && "bg-green-primary"
      } cursor-pointer`}
      onClick={() => onClick()}
    >
      <div className="flex w-full justify-between items-center pr-4">
        <div className="flex items-center">
          <h3 className="text-black-primary font-semibold">
            {index + 1}. {title}
          </h3>
          {(completed || toggled) && <FaCheck className="ml-2 text-black-primary" />}
        </div>
        <img src={img} className="object-contain" alt="->" />
      </div>
      {active && (
        <>
          <p className="mt-2 text-sm">{description}</p>
          <div className="flex items-center cursor-pointer mt-2" onClick={() => handleComplete()}>
            {!toggled && !completed && (
              <>
                <span className="text-sm">Mark as completed</span>
                <FaCheck className="ml-2 text-black-primary" />
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default LessonItem;
