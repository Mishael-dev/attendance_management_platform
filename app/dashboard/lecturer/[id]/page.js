"use client";
import Image from "next/image";
import Container from "@/components/container";
import { H1 } from "@/components/typography";
import { Card } from "@/components/ui/card";
import { H2 } from "@/components/typography";
import { get_user_data } from "@/utils/functions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home({ params }) {
  const user = get_user_data();
  const user_id = params.id;

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
              <TabsTrigger value="live">Classes</TabsTrigger>
              <TabsTrigger value="history">Class history</TabsTrigger>
            </TabsList>
            <TabsContent value="live">
              <Card className="p-10">you have no live class</Card>
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



