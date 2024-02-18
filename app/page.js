import Image from "next/image";
import Container from "@/components/container";
import NavBar from "@/components/NavBar";
import { H2, H1, P } from "@/components/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Container>
        <NavBar />
        <div className="mt-14 flex justify-center w-full gap-x-8">
          {/* hero text */}
          <div className="w-[55%] flex flex-col gap-y-6">
            <H1>
              Elevate Learning: Effortless Attendance Tracking for Every Class
            </H1>
            <P>
              Revolutionize attendance tracking with our app. By integrating
              student and teacher locations, it ensures accurate class presence
              confirmation. Streamlined, secure, and privacy-focused, it
              empowers educators and engages students seamlessly in learning
            </P>

            <Link href="/sign_up">
              <Button>Get Started</Button>
            </Link>
          </div>
          <div className="shrink-0">
            <Image alt="a picture of a student writing" height={400} width={400} src={"/hero_image.svg"} />
          </div>
        </div>
      </Container>
    </main>
  );
}
