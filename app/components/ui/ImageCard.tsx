"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageCardProps {
  imageUrl: string;
  width: number;
  height: number;
}

const ImageCard = ({ imageUrl, width, height }: ImageCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer transition-transform hover:scale-105 h-fit w-fit"
        onClick={() => setIsModalOpen(true)}
      >
        <Image src={imageUrl} alt="image" width={width} height={height} />
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw] p-4 bg-[#111111] border border-white/10 rounded-md">
            <Image
              src={imageUrl}
              alt="image"
              width={width * 3}
              height={height * 3}
              className="object-contain border border-white/10"
            />
            <button
              className="absolute flex items-center justify-center -top-4 -right-4 border border-white/10 bg-[#111111] p-2 m-0 w-10 h-10 text-white hover:bg-white/20"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCard;
