import Image from "next/image";
import Container from "@/components/container";
import NavBar from "@/components/NavBar";
import StudentSignUpForm from "@/components/StudentSignUpForm";
import { H2 } from "@/components/typography";

export default function Home() {
  return (
    <main>
      <Container>
        <H2>Student Sign-up form</H2>
        <StudentSignUpForm />
      </Container>
    </main>
  );
}
