"use client";
import { Button } from "./ui/button";
import Link from "next/link";
import { get_user_data } from "@/utils/functions";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const NavBar = () => {
  const user = get_user_data();
  console.log(user);
  const UserIcon = user?.first_name?.[0] || "name";
  const router = useRouter();
  const userType = user?.matric_number ? "student" : "lecturer";

  return (
    <nav className="flex justify-between mb-8 py-2 rounded">
      <Link href={"/"}>
        <span className="font-bold text-3xl">AMP</span>
      </Link>

      <div>
        {user ? (
          <Avatar>
            <AvatarFallback
              className="font-bold text-secondary bg-primary text-xl cursor-pointer "
              onClick={() => router.push(`/dashboard/${userType}/${user.id}`)}
            >
              {UserIcon}
            </AvatarFallback>
          </Avatar>
        ) : (
          <div>
            <Sheet className="md:hidden">
              <SheetContent className="flex flex-col items-center">
                <p className="font-bold text-lg">Links</p>
                <div className="w-full flex flex-col items-center gap-y-4">
                  <Link href={"/"}>Home</Link>
                  <Link href={"/sign_up"}>
                    <Button className="">Sign Up</Button>
                  </Link>
                  <Link href={"/sign_in"}>
                    <Button variant="secondary">Sign in </Button>
                  </Link>
                </div>
              </SheetContent>
              <SheetTrigger className="md:hidden">
                <HamburgerMenuIcon />
              </SheetTrigger>
            </Sheet>
            <div className="hidden md:block">
              <Link href={"/sign_up"}>
                <Button className="mr-8">Sign Up</Button>
              </Link>
              <Link href={"/sign_in"}>
                <Button variant="secondary">Sign in </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
