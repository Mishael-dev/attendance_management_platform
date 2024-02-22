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
import { signStudent } from "@/utils/api";

const StudentSignInForm = () => {
  const { handleSubmit, register } = useForm();
  const add_user = userStore((state) => state.add_user);
  const router = useRouter();

  const onSubmit = (post_data) => {
    signStudent(post_data)
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
          {/* Matric Number */}
          <div className="md:w-[60%] ">
            <div className="flex flex-col items-start  mt-4">
              <Label htmlFor="matric_number" className="text-right">
                Matric Number
              </Label>
              <Input
                id="matric_number"
                type="text"
                {...register("matric_number", { required: true })}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col items-start  mt-4">
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
            <Button className="mt-4" type="submit">
              Sign Up
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default StudentSignInForm;
