import React from 'react';
import { Button } from '../ui/button';
import { soal } from '@/lib/soal';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from '../ui/dialog';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { Badge } from '../ui/badge';

export const Peta = () => {
  // Mengambil nomor soal dari array soal
  const nomorSoal = soal.map((item) => item.no);

  return (
    <div className="grid grid-cols-8 gap-2">
      {Array.from({ length: 64 }, (_, index) => {
        const nomor = index + 1;
        const soalItem = soal.find((item) => item.no === nomor);

        // Cek apakah nomor ini ada dalam array nomorSoal
        if (soalItem) {
          return (
            <Dialog key={nomor}>
              <DialogTrigger asChild>
                <Button size="icon" variant="default">
                  {nomor}
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>Soal No. {soalItem.no}</DialogHeader>
                <p className="text-sm">
                  <span className="font-semibold">Pertanyaan: </span>
                  {soalItem.soal}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Jawaban: </span>
                  {soalItem.jawab}
                </p>
                <div className="flex gap-2 justify-center items-center">
                  <Badge className="flex gap-1 items-center ">
                    <ArrowUp className="w-4 h-4" /> <p>+ {soalItem.maju}</p>
                  </Badge>
                  <Badge variant="destructive" className="flex gap-1 items-center">
                  <ArrowDown className="w-4 h-4 ml-2" /> <p>- {soalItem.mundur}</p>
                  </Badge>
                </div>
              </DialogContent>
            </Dialog>
          );
        } else {
          return (
            <Button key={nomor} size="icon" variant="outline">
              {nomor}
            </Button>
          );
        }
      })}
    </div>
  );
};