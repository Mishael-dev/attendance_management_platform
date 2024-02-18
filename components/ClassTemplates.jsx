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

const ClassTemplates = () => {
  const [templates, setTemplates] = useState([]);

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
      lecturer_id: 1,
      start_time: getCurrentTime(),
      end_time: getEndTime(getCurrentTime(), 2),
      location: { long: 500, lat: 600 },
      course: post_data.course,
      attendance_list: [{ student_id: 1, mins_late: 20 }],
      status: "ongoing",
    };

    startClass(data);
  };

  return (
    <section>
      {templates.length > 0
        ? templates.map(
            ({ course_code, course_name, course, group, level, id }, index) => (
              <Card key={index}>
                <div>
                  <H2>{course_name}</H2>
                  <span>{course_code}</span>
                </div>
                <span>{level || 100}</span>
                <span>{group}</span>

                <Link href={`/class/${id}`}>
                  <Button
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
              </Card>
            )
          )
        : ""}
    </section>
  );
};

export default ClassTemplates;
