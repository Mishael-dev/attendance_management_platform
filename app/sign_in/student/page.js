import Image from "next/image";
import Container from "@/components/container";
import NavBar from "@/components/NavBar";
import StudentSignInForm from "@/components/StudentSignInForm";
import { H1 } from "@/components/typography";

export default function Home() {
  return (
    <main>
      <Container>
        <H1>Sign In</H1>
        <StudentSignInForm />
      </Container>
    </main>
  );
}
