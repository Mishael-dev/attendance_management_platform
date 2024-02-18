"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Container from "@/components/container";
import { H1 } from "@/components/typography";
import { Card } from "@/components/ui/card";
import { H2 } from "@/components/typography";
import { get_user_data } from "@/utils/functions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getStudentClasses } from "@/utils/api";

export default function Home({ params }) {
  const user = get_user_data();
  const user_id = params.id;
  const [classes, setClasses] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await getStudentClasses(user.course, user.group, user.level);
      setClasses(data);
    }

    fetchData();
  }, []);

  return (
    <main>
      <Container>
        <H1>Welcome {user.first_name} </H1>

        {/* user name and app id */}
        <Card className="px-10 py-4">
          <H2>{user.full_name}</H2>
          <span>{user.matric_number}</span>
        </Card>

        <section className="mt-12">
          <Tabs defaultValue="history">
            <TabsList>
              <TabsTrigger value="live">live Classes</TabsTrigger>
              <TabsTrigger value="history">Class history</TabsTrigger>
            </TabsList>
            <TabsContent value="live">
              <Card className="p-10">
                {classes.length > 0
                  ? classes.map((clas) => {
                      if (clas.status == "ongoing")
                        return <div>{clas.course_code} started {clas.start_time}</div>;
                    })
                  : ""}
              </Card>
            </TabsContent>

            <TabsContent value="history">
              <Card className="p-10">you have no previous class</Card>
            </TabsContent>
          </Tabs>
        </section>
      </Container>
    </main>
  );
}
