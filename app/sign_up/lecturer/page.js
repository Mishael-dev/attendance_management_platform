import Image from "next/image";
import Container from "@/components/container";
import NavBar from "@/components/NavBar";
import LecturerSignUpForm from "@/components/LecturerSignUpForm"
import { H2 } from "@/components/typography";

export default function Home() {
  return (
    <main>
      <Container>
      <NavBar />
        <H2>Lecturer Sign-up form</H2>
        <LecturerSignUpForm/>
        
      </Container>
    </main>
  );
}
