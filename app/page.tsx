import Image from "next/image";
import {Button} from "@/components/ui/button"
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-100px)] items-center justify-center gap-6">
      <h2 className="text-3xl font-semibold">Games An-Naafi</h2>

      <div className="flex flex-col w-full gap-3">
        <Link href="/peta">
          <Button className="w-full">Peta Ular Tangga</Button>
        </Link>
        
        <Link href="/">
        <Button variant="outline" className="w-full border-primary border">Soal Ular Tangga</Button>
        </Link>
      </div>
    </div>
  );
}
