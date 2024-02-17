import Image from "next/image";
import Container from "@/components/container";
import NavBar from "@/components/NavBar";
import LecturerSignInForm from "@/components/LecturerSignInForm";
import { H2 } from "@/components/typography";

export default function Home() {
  return (
    <main>
      <Container>
        <H2>Lecturer Sign-up form</H2>
        <LecturerSignInForm />
      </Container>
    </main>
  );
}
