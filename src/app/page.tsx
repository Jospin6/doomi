import { SideNavbar } from "@/components/SideNavbar";

export default function Home() {
  return (
    <main className="grid grid-cols-8 gap-4 bg-[#000000]">
      <div className="col-span-2 h-[100vh] p-2">
        <SideNavbar/>
      </div>
      <div className="col-span-4 h-[100vh] border-x-[1px] border-[#121212]">
        <div className="h-[80px] border-b-[1px] border-[#121212] w-full"></div>
        <div></div>
      </div>
      <div className="col-span-2 h-[100vh]"></div>
    </main>
  );
}
