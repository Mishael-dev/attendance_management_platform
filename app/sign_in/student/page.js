import Image from "next/image";
import Container from "@/components/container";
import NavBar from "@/components/NavBar";
import StudentSignInForm from "@/components/StudentSignInForm";
import { H2 } from "@/components/typography";

export default function Home() {
  return (
    <main>
      <Container>
      <NavBar />
        <H2>Student Sign-up form</H2>
        <StudentSignInForm />
      </Container>
    </main>
  );
}
