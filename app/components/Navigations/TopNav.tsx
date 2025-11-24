import Image from "next/image";

import phishawareLogo from "@/app/favicon.ico";
import Link from "next/link";
import Wrapper from "../Wrapper";

const TopNav = () => {
  return (
    <div>
      <header className="bg-white shadow">
        <Wrapper>
          <div className="mx-auto py-4 flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center gap-3">
                <Image
                  src={phishawareLogo}
                  alt="PhishAware logo"
                  className="w-10 h-10"
                />
                <div>
                  <h1 className="text-xl font-bold">PhishAware</h1>
                  <p className="text-sm text-gray-500">
                    Learn. Scan. Stay Safe.
                  </p>
                </div>
              </div>
            </Link>

            <nav className="flex items-center gap-4">
              <Link href="/" className="text-sm font-medium hover:underline">
                Home
              </Link>
              <Link
                href="/quiz"
                className="text-sm font-medium hover:underline"
              >
                Take Quiz
              </Link>
              <a href="/guide" className="text-sm font-medium hover:underline">
                Guide
              </a>
              <a
                href="#scanner"
                className="text-sm font-medium hover:underline"
              >
                Scanner
              </a>
            </nav>
          </div>
        </Wrapper>
      </header>
    </div>
  );
};

export default TopNav;
