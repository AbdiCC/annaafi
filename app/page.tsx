import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-100px)] items-center justify-center gap-6">
      <h2 className="text-3xl font-semibold">Link Pendaftaran</h2>

      <div className="flex flex-col w-full gap-3">
        <Link href="https://forms.gle/4vRb33V6qJuPVUk59">
          <Button className="w-full">Daftar Tahsin Anak</Button>
        </Link>

        <Link href="#">
          <Button variant="outline" className="w-full border-primary border" disabled>
            Daftar Tahsin Umum {"\n"}(Sudah Penuh)
          </Button>
        </Link>
      </div>
    </div>
  );
}
