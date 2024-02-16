
import { H1 } from "@/components/typography";
import Container from "@/components/container";
import ClassTemplates from "@/components/ClassTemplates";

const Page = () => {
  
  return (
    <div>
      <Container pad>
        <H1>Click on a class to start it</H1>
        <ClassTemplates />
      </Container>
    </div>
  );
};

export default Page;
