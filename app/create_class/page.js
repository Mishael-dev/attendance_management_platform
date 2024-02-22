import { H1 } from "@/components/typography";
import Container from "@/components/container";
import ClassForm from "@/components/ClassForm";
import NavBar from "@/components/NavBar";

const Page = () => {
  return (
    <div>
      <Container pad>
        <NavBar />
        <H1>Create class</H1>
        <ClassForm />
      </Container>
    </div>
  );
};

export default Page;
