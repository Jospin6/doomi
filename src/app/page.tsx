import { MainButton } from "@/components/MainButton";

export default function Home() {
  return (
    <main className="grid grid-cols-8 gap-4 bg-[#000000]">
      <div className="col-span-2 bg-[#121212] h-[100vh] p-2">
        <div className="font-[600] w-full text-white text-[20px] h-[100px] flex items-center">doomi</div>
        <MainButton/>
      </div>
      <div className="col-span-4 bg-[#121212] h-[100vh]"></div>
      <div className="col-span-2 bg-[#121212] h-[100vh]"></div>
    </main>
  );
}
