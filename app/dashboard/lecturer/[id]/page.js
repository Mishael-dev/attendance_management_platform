import Image from "next/image";
import Container from "@/components/container";
import { H1 } from "@/components/typography";

export default function Home({ params }) {
  const user_id = params.id;

  return (
    <main>
      <Container>
        <H1>Welcome lecturer {user_id}</H1>
      </Container>
    </main>
  );
}
