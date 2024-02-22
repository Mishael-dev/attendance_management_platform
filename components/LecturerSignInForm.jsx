"use client";
import React, { useEffect } from "react";
import Container from "./container";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { userStore } from "@/store/user";
import { useRouter } from "next/navigation";
import { getUser } from "@/utils/functions";
import { signLecturer } from "@/utils/api";

const LecturerSignInForm = () => {
  const { handleSubmit, register } = useForm();
  const add_user = userStore((state) => state.add_user);
  const router = useRouter();

  const onSubmit = (post_data) => {
    signLecturer(post_data)
      .then((data) => add_user(data.data, data.token))
      .then(() => {
        const { user, user_id } = getUser();
        router.push(`http://localhost:3000/dashboard/lecturer/${user_id}`);
      });
  };
  return (
    <div>
      <Container sm>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-20">
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
          <Button type="submit" className="mt-4">Sign Up</Button>
        </form>
      </Container>
    </div>
  );
};

export default LecturerSignInForm;
