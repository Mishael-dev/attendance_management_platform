"use client"
import { H1 } from "@/components/typography";
import Container from "@/components/container";
import ClassTemplates from "@/components/ClassTemplates";
import NavBar from "@/components/NavBar";

const Page = () => {
  
  return (
    <div>
      <Container pad>
      <NavBar />
        <H1>Click on a class to start it</H1>
        <ClassTemplates />
      </Container>
    </div>
  );
};

export default Page;
