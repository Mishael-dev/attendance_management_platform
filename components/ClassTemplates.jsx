"use client";
import { useState, useEffect } from "react";
import { getClassTemplates } from "@/utils/api";
import { Card } from "./ui/card";
import { H2 } from "./typography";
import { Button } from "./ui/button";
import Link from "next/link";
import { getCurrentTime } from "@/utils/functions";
import { getEndTime } from "@/utils/functions";
import { startClass } from "@/utils/api";
import { get_user_data, get_user_location } from "@/utils/functions";

const ClassTemplates = () => {
  const [templates, setTemplates] = useState([]);
  const user = get_user_data();
  console.log(user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const templatesData = await getClassTemplates();
        setTemplates(templatesData);
        console.log(templatesData);
      } catch (error) {
        console.error("Error fetching class templates:", error);
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = (post_data) => {
    const data = {
      ...post_data,
      lecturer_id: user.id,
      start_time: getCurrentTime(),
      end_time: getEndTime(getCurrentTime(), 2),
      location: "",
      course: post_data.course,
      attendance_list: [],
      status: "ongoing",
    };

    console.log(data);

    get_user_location().then((location) =>
      startClass({
        ...post_data,
        lecturer_id: user.id,
        start_time: getCurrentTime(),
        end_time: getEndTime(getCurrentTime(), 2),
        location: location,
        course: post_data.course,
        attendance_list: [],
        status: "ongoing",
      })
    );
  };

  return (
    <section>
      {templates.length > 0
        ? templates.map(
            ({ course_code, course_name, course, group, level, id }, index) => (
              <div
                key={index}
                className="flex gap-2 flex-col hover:bg-secondary  p-2 rounded"
              >
                <div className="flex justify-between items-center flex-wrap">
                  <H2>{course_code}</H2>

                  <span>{level}</span>
                  <span className="text-xl">Group {group}</span>
                </div>

                <Link href={`/class/${id}`}>
                  <Button
                    variant="outline"
                    onClick={() =>
                      handleButtonClick({
                        course_code,
                        course_name,
                        group,
                        level,
                        course,
                      })
                    }
                  >
                    Start class
                  </Button>
                </Link>
              </div>
            )
          )
        : ""}
    </section>
  );
};

export default ClassTemplates;
