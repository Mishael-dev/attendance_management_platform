"use client";
import React, { useEffect } from "react";
import Container from "./container";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { RegisterStudent } from "@/utils/api";
import { userStore } from "@/store/user";
import { useRouter } from "next/navigation";
import { getUser } from "@/utils/functions";

const StudentSignInForm = () => {
  const { handleSubmit, register } = useForm();
  const add_user = userStore((state) => state.add_user);
  const router = useRouter();

  const onSubmit = (post_data) => {
    RegisterStudent(post_data)
      .then((data) => {
        console.log(data);
        add_user(data.data, data.token);
      })
      .then(() => {
        const { user, user_id } = getUser();
        router.push(`http://localhost:3000/dashboard/student/${user_id}`);
      });
  };

  return (
    <div>
      <Container sm>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-20">
          {/* First Name */}
          <div className="flex flex-col items-start w-[60%]">
            <Label htmlFor="first_name" className="text-right">
              First Name
            </Label>
            <Input
              id="first_name"
              type="text"
              {...register("first_name", { required: true })}
            />
          </div>

          {/* Full Name */}
          <div className="flex flex-col items-start w-[60%] mt-4">
            <Label htmlFor="full_name" className="text-right">
              Full Name
            </Label>
            <Input
              id="full_name"
              type="text"
              {...register("full_name", { required: true })}
            />
          </div>

          {/* course */}
          <div className="flex flex-col items-start w-[60%] mt-4">
            <Label htmlFor="course" className="text-right">
              Course
            </Label>
            <Input
              id="course"
              type="text"
              {...register("course", { required: true })}
            />
          </div>

          <div className="flex flex-col items-start w-[60%] mt-4">
            <Label htmlFor="level" className="text-right">
              level
            </Label>
            <Input
              id="level"
              type="text"
              {...register("level", { required: true })}
            />
          </div>

          <div className="flex flex-col items-start w-[60%] mt-4">
            <Label htmlFor="course" className="text-right">
              Group
            </Label>
            <Input
              id="group"
              type="text"
              {...register("group", { required: true })}
            />
          </div>

          {/* Matric Number */}
          <div className="flex flex-col items-start w-[60%] mt-4">
            <Label htmlFor="matric_number" className="text-right">
              Matric Number
            </Label>
            <Input
              id="matric_number"
              type="text"
              {...register("matric_number", { required: true })}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col items-start w-[60%] mt-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email", { required: true })}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col items-start w-[60%] mt-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              {...register("password", { required: true })}
            />
          </div>

          {/* Submit Button */}
          <Button type="submit">Sign Up</Button>
        </form>
      </Container>
    </div>
  );
};

export default StudentSignInForm;
