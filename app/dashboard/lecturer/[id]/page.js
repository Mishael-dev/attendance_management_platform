"use client";
import Image from "next/image";
import Container from "@/components/container";
import { H1 } from "@/components/typography";
import { Card } from "@/components/ui/card";
import { H2 } from "@/components/typography";
import { get_user_data } from "@/utils/functions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getLecturerClasses } from "@/utils/api";
import { useState, useEffect } from "react";
import ClassTemplates from "@/components/ClassTemplates";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NavBar from "@/components/NavBar";

export default function Home({ params }) {
  const user = get_user_data();
  const user_id = params.id;
  console.log(user_id);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getLecturerClasses(user.id);
      console.log("lecturer_class", data);
      setClasses(data);
    }

    fetchData();
  }, [user.id]);

  return (
    <main>
      <Container>
        <NavBar />
        <H1 className="mb-8"> {user.full_name || null} </H1>
        <H2>{user.email}</H2>

        <section className="mt-12">
          <Tabs defaultValue="templates">
            <TabsList>
              <TabsTrigger value="templates">Class templates</TabsTrigger>
              <TabsTrigger value="live">Live Classes</TabsTrigger>
            </TabsList>
            <TabsContent value="templates">
              <Card className="p-10">
                <ClassTemplates />
                <Link href="/create_class">
                  <Button className="mt-12">New Class Template</Button>
                </Link>
              </Card>
            </TabsContent>

            <TabsContent value="live">
              <Card className="p-10">
                {classes.length > 0
                  ? classes.map((item, index) => (
                      <Link href={`/class/${item.id}`} key={index}>
                        {item.course_code}, started at {item.start_time}
                      </Link>
                    ))
                  : ""}
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </Container>
    </main>
  );
}

const ClassCard = ({}) => {
  return <div>hello world</div>;
};
