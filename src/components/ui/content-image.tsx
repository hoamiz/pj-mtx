import Image from "next/image";
import { cn } from "@/lib/utils";

type ContentImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
};

export function ContentImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
}: ContentImageProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-full rounded-lg object-cover"
      />
    </div>
  );
}
