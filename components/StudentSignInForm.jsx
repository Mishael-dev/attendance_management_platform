import React from "react";
import Container from "./container";
import { Label } from "@radix-ui/react-label";
import { Input } from "postcss";
import { RegisterStudent } from "@/utils/api";

const StudentSignInForm = () => {
  const onSubmit = (data) => {
    console.log(data);
    RegisterStudent(data);
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
          <Button onClick={handleButtonClick} type="submit">
            Sign Up
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default StudentSignInForm;
