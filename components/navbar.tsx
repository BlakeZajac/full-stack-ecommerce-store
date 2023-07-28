import Link from "next/link";
import Image from "next/image";
import logo from "../app/assets/logo.svg";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <header className="border-b">
      <Container>
        <div className="relative flex h-16 items-center">
          <Link
            href="/"
            className="ml-4 flex w-fit lg:ml-0 gap-x-2 transition-all hover:opacity-50 hover:transition-all"
          >
            <Image src={logo} alt="Site logo" className="h-8 w-fit" />
          </Link>

          <MainNav data={categories} />

          <NavbarActions />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
