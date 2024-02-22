"use client";
import { H1, H2 } from "@/components/typography";
import Container from "@/components/container";
import { getClasses } from "@/utils/api";
import { get_user_data } from "@/utils/functions";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { signStudentAttendance } from "@/utils/api";
import { get_user_location } from "@/utils/functions";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { subtractAndFormatTime } from "@/utils/functions";
import { downloadAttendanceList } from "@/utils/api";
import NavBar from "@/components/NavBar";
import { formatTime } from "@/utils/functions";

const Page = ({ params }) => {
  const classId = params.classId;
  const [classes, setClasses] = useState([]);
  const user = get_user_data();
  const [attendanceMessage, setAttendanceMessage] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await getClasses();
      setClasses(data);
    }

    fetchData();
  }, [attendanceMessage]);

  const findThisClass = () => {
    return classes.length > 0
      ? classes.find((clas) => clas.id == classId)
      : {
          course_name: "",
          course_code: "",
          start_time: "",
          end_time: "",
          attendance_list: "",
        };
  };

  const {
    course_name,
    course_code,
    start_time,
    end_time,
    attendance_list,
    id,
  } =
    classes.length > 0
      ? findThisClass()
      : {
          course_name: "",
          course_code: "",
          start_time: "",
          end_time: "",
          attendance_list: "",
          id,
        };
  return (
    classes.length > 0 && (
      <div>
        <Container pad>
          <NavBar />
          <div>
            <H1>{course_name} </H1>
            <p className="text-2xl font-bold text-primary/70">{course_code}</p>
          </div>
          <p className="mb-10">
            started at{" "}
            <span className="font-bold">{formatTime(start_time)}</span>
          </p>
          <H2>Attendace List</H2>
          <ol className="list-disk">
            {attendance_list.length > 0
              ? attendance_list.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-x-4 hover:bg-secondary p-2 items-center"
                  >
                    <span className="h-12 w-12 rounded-full flex justify-center items-center bg-white">
                      {index + 1}
                    </span>
                    <span>{item.full_name}</span>
                    <span className="font-bold">{item.matric_number}</span>
                    <span>
                      {subtractAndFormatTime(start_time, item.arrival_time)}
                    </span>
                  </li>
                ))
              : ""}
          </ol>
          {user.matric_number ? (
            <Dialog className="p-4 bg-secondary">
              <DialogTrigger asChild>
                <Button
                  onClick={() => {
                    get_user_location().then((location_data) =>
                      signStudentAttendance({
                        student_id: user.id,
                        arrival_time: new Date(),
                        class_id: classId,
                        student_location: location_data,
                      }).then((data) => {
                        console.log(data);
                        setAttendanceMessage(data.message);
                        setSuccess(data.status);
                      })
                    );
                  }}
                >
                  Join Class
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Alert</DialogTitle>
                  <DialogDescription className="mt-6">
                    {attendanceMessage.length > 0 ? (
                      <p className="">{attendanceMessage} </p>
                    ) : (
                      <Skeleton className={"h-6 w-full"} />
                    )}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4"></div>
                </div>
                <DialogTrigger className="flex items-end">
                  {success == "successful" ? (
                    <Button type="submit">Done</Button>
                  ) : (
                    <Button
                      type="submit"
                      onClick={() => {
                        get_user_location().then((location_data) =>
                          signStudentAttendance({
                            student_id: user.id,
                            arrival_time: new Date(),
                            class_id: classId,
                            student_location: location_data,
                          }).then((data) => {
                            console.log(data);
                            setAttendanceMessage(data.message);
                            setSuccess(data.status);
                          })
                        );
                      }}
                    >
                      Retry
                    </Button>
                  )}
                </DialogTrigger>
              </DialogContent>
            </Dialog>
          ) : (
            <Button onClick={() => downloadAttendanceList({ class_id: id })}>
              Download List
            </Button>
          )}
        </Container>
      </div>
    )
  );
};

export default Page;
