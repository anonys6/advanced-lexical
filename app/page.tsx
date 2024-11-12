import Info from "@/components/Info";
import dynamic from "next/dynamic";
const LexicalEditor = dynamic(() => import("./app"), { ssr: false });

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-6">
      <LexicalEditor />

      <div className="px-5">

        <Info />
      </div>
    </main>
  );
}
