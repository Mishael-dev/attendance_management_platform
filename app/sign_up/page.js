"use client";
import Image from "next/image";
import Container from "@/components/container";
import NavBar from "@/components/NavBar";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Container>
        <NavBar />
        <div className=" w-full h-full flex items-center justify-center mt-32 flex-col gap-y-4">
          <Link href={"/sign_up/student"}>
            <Card className="px-4 py-6 w-fit flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              Sign up As Student
            </Card>
          </Link>

          <Link href={"/sign_up/lecturer"}>
            <Card className="px-4 py-6 w-fit flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              Sign Up As Lecturer
            </Card>
          </Link>
        </div>
      </Container>
    </main>
  );
}
