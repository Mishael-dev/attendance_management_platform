import Image from "next/image";
import Container from "@/components/container";
import NavBar from "@/components/NavBar";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Container >
        <Link href={"/sign_up/student"}>
        <Card className="px-4 py-6 w-40" >
          Login As Student
        </Card></Link>
        
        <Link href={"/sign_up/lecturer"}>
        <Card className="px-4 py-6 w-40" >
          Login As Lecturer
        </Card></Link>
      </Container>
    </main>
  );
}
