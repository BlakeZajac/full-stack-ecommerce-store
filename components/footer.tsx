import Container from "@/components/ui/container";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <Container>
        <div className="flex flex-wrap gap-x-4 gap-y-1 items-center justify-between mx-auto py-6">
          <p className="text-sm text-black">
            {/* Copyright disclaimer with the current year */}
            &copy; {new Date().getFullYear()} Blake Zajac. All rights reserved.
          </p>

          <p className="text-sm text-black">
            Developed by{" "}
            <a
              href="https://blakezjac.com"
              target="_blank"
              className="text-sm pb-[2px] border-b hover:border-black"
            >
              Blake Zajac
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
