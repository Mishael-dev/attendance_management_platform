"use client";
import Container from "./container";
import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { sendClassTemplate } from "@/utils/api";

const ClassForm = () => {
  const { handleSubmit, register } = useForm();

  function onSubmit(data) {
    const info = {
      course_name: data.course_name,
      course_code: data.course_code,
      group: data.group,
      lecturer_id: 1,
    };
    const response = sendClassTemplate(info);
    console.log("res")
    console.log(response);

    console.log(info);
  }

  return (
    <div>
      <Container sm>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-20">
          {/* first line */}
          <div className="flex justify-between ">
            <div className="flex flex-col items-start w-[50%]">
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

          {/* group */}
          <div className="flex flex-col items-start w-[30%]">
            <Label htmlFor="item" className="text-right">
              Group
            </Label>
            <Input
              id="group"
              type="text"
              {...register("group", { required: true })}
            />
          </div>
          <Button type="submit">hello</Button>
        </form>
      </Container>
    </div>
  );
};

export default ClassForm;
