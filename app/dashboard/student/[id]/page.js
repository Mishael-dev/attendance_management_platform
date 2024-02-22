"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Container from "@/components/container";
import { H1 } from "@/components/typography";
import { Card } from "@/components/ui/card";
import { H2, H3 } from "@/components/typography";
import { get_user_data } from "@/utils/functions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getStudentClasses } from "@/utils/api";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NavBar from "@/components/NavBar";

export default function Home({ params }) {
  const user = get_user_data();
  const user_id = params.id;
  const [classes, setClasses] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await getStudentClasses(user.course, user.group, user.level);
      setClasses(data);
      console.log(data);
    }

    fetchData();
  }, [user.course, user.group, user.level]);

  return (
    <main>
      <Container>
        <NavBar />
        <div className="flex justify-between">
          <H1>{user.first_name} </H1>
          <H2>{user.matric_number}</H2>
        </div>
        <span className="text-xl text-primary/70">{user.email}</span>

        <section className="mt-12">
          <H3>Classes</H3>
          <div className="flex flex-col gap-y-2">
            {classes.length > 0
              ? classes.map((clas, index) => {
                  if (clas.status == "ongoing")
                    return (
                      <Link
                        href={`/class/${clas.id}`}
                        className="hover:bg-white w-fit px-4 py-2 "
                      >
                        <div
                          key={index}
                          className="flex gap-x-2 justify-between items-center max-w-xl "
                        >
                          <span className="font-bold">{clas.course_code}</span>{" "}
                          started {clas.start_time}
                        </div>
                      </Link>
                    );
                })
              : ""}
          </div>
        </section>
      </Container>
    </main>
  );
}
