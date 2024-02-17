"use client";
import React from "react";
import Container from "./container";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { registerLecturer } from "@/utils/api";
import { getUser } from "@/utils/functions";
import { useRouter } from "next/navigation";
import { userStore } from "@/store/user";

const LecturerSignUpForm = () => {
  const { handleSubmit, register } = useForm();
  const router = useRouter();
  const add_user = userStore((state) => state.add_user);

  const onSubmit = (post_data) => {
    registerLecturer(post_data)
      .then((data) => add_user(data.data, data.token))
      .then(() => {
        const { user_id } = getUser();
        router.push(`http://localhost:3000/dashboard/lecturer/${user_id}`);
      });
  };

  return (
    <div>
      <Container sm>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-20">
          {/* Name */}
          <div className="flex flex-col items-start w-[60%]">
            <Label htmlFor="name" className="text-right">
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
          <Button type="submit">
            Register Lecturer
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default LecturerSignUpForm;
