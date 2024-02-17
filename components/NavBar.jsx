import { Button } from "./ui/button";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex justify-between mt-12">
      <span className="font-bold text-3xl">ATM</span>

      <div>
        <Link href={"/sign_up"}>
          <Button className="mr-8">Sign Up</Button>
        </Link>
        <Link href={"/sign_in"}>
          <Button variant="secondary">Sign in </Button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
