import { H1,H2 } from "@/components/typography";
import Container from "@/components/container";
import { getClasses } from "@/utils/api";

const Page = async ({ params }) => {
  const classId = params.classId;
  const classes = await getClasses();
  const findThisClass = () => {
    return classes.find((clas) => clas.id == classId);
  };
  const { course_name, course_code, start_time, end_time, attendance_list } = findThisClass();

  return (
    classes.length > 0 && (
      <div>
        <Container pad>
          <H1>{course_name} </H1>
          <p>{course_code}</p>
          <p className="pt-10">started at {start_time}</p>

          <H2>Attendace List</H2>
          <Attendace {...attendance_list} />
        </Container>
      </div>
    )
  );
};

const  Attendace = async()=> {
  const classes = await getClasses();
  return "hi"
}

export default Page;
