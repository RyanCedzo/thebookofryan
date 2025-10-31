"use client"; // must be first line

import Image from "next/image";

interface BlogImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function BlogImage({ src, alt, width, height }: BlogImageProps) {
  return (
    <div style={{ textAlign: "center" }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ borderRadius: 8 }}
      />
    </div>
  );
}