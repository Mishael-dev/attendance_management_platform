"use client";
import Container from "./container";
import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { sendClassTemplate } from "@/utils/api";
import { useRouter } from "next/navigation";

const ClassForm = () => {
  const { handleSubmit, register } = useForm();
  const router = useRouter();

  function onSubmit(data) {
    const info = {
      course_name: data.course_name,
      course_code: data.course_code,
      group: data.group,
      level: data.level,
      duration: data.duration,
      lecturer_id: 1,
    };

    console.log(data);
    sendClassTemplate(info);
  }

  const handleButtonClick = () => {
    router.push("/start_class");
  };

  return (
    <div>
      <Container sm>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-20">
          {/* first line */}
          <div className="flex justify-between ">
            <div className="flex flex-col items-start w-[60%]">
              <Label htmlFor="item" className="text-right">
                Course Tittle
              </Label>
              <Input
                id="course_name"
                type="text"
                {...register("course_name", { required: true })}
              />
            </div>

            <div className="flex flex-col items-start w-[30%]">
              <Label htmlFor="item" className="text-right">
                Course Code
              </Label>
              <Input
                id="course_code"
                type="text"
                {...register("course_code", { required: true })}
              />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col items-start w-[30%]">
              <Label htmlFor="item" className="text-right">
                Level
              </Label>
              <Input
                id="level"
                type="text"
                {...register("level", { required: true })}
              />
            </div>

            {/* group */}
            <div className="flex flex-col items-start w-[60%]">
              <Label htmlFor="item" className="text-right">
                Group
              </Label>
              <Input
                id="group"
                type="text"
                {...register("group", { required: true })}
              />
            </div>

            <div className="flex flex-col items-start w-[60%]">
              <Label htmlFor="duration" className="text-right">
                Duration
              </Label>
              <Input
                id="duration"
                type="text"
                {...register("duration", { required: true })}
              />
            </div>
          </div>
          <Button onClick={handleButtonClick} type="submit">
            hello
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default ClassForm;
