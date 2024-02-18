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

export default function Home({ params }) {
  const user = get_user_data();
  const user_id = params.id;
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getLecturerClasses(user.id);
      console.log(data);
      setClasses(data);
    }

    fetchData();
  }, [user.id]);

  return (
    <main>
      <Container>
        <H1>Welcome {user.first_name} </H1>

        {/* user name and app id */}
        <Card className="px-10 py-4">
          <H2>{user.full_name}</H2>
          <span>{user.email}</span>
        </Card>

        <section className="mt-12">
          <Tabs defaultValue="history">
            <TabsList>
              <TabsTrigger value="live">Class templates</TabsTrigger>
              <TabsTrigger value="history">Class history</TabsTrigger>
            </TabsList>
            <TabsContent value="live">
              <Card className="p-10">
                <ClassTemplates />
              </Card>
              <Button>New Class Template</Button>
            </TabsContent>

            <TabsContent value="history">
              <Card className="p-10">
                {classes.length > 0
                  ? classes.map((item, index) => (
                      <div key={index}>
                        {item.course_code}, started at {item.start_time}
                      </div>
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
