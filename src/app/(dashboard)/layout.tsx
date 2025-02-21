import Menu from "@/components/Menu";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/*LEFT*/}
      <div className="w-[14%] md:w-[8%] lg:[16%] xl:w-[14%] p-4 bg-bdBoostedBlue">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-center gap-2"
        >
          <div className="flex flex-col gap-2 items-center m-1">
            <Image
              src="/BD_1-Color_Reverse_RGB_TransparentBurst.png"
              alt="logo"
              width={120}
              height={120}
            ></Image>
            <span className="hidden lg:block xl:text-2xl lg:text-xl md:text-lg font-bold text-white text-center">Lean Management System (LMS)</span>
          </div>
        </Link>
        <Menu />
      </div>
      {/*RIGHT*/}
      <div className="w-[86%] md:w-[92%] lg:[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        <NavBar />
        {children}
      </div>
    </div>
  );
}
