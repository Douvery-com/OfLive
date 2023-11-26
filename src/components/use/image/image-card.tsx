import { component$ } from "@builder.io/qwik";
import { Image } from "qwik-image";
import type { LayoutOptions, ObjectFitOptions } from "~/core/types/enum";

export const ImageCard = component$(
  ({
    layout,
    objectFit,
    width,
    height,
    isclass,
    src,
    alt,
    background,
  }: {
    layout: LayoutOptions;
    objectFit: ObjectFitOptions;
    width: number;
    height?: number;
    isclass: string;
    priority?: boolean;
    src: string;
    alt: string;
    background?: string;
  }) => {
    return (
      <>
        <Image
          width={width}
          height={height}
          layout={layout as any}
          objectFit={objectFit}
          class={isclass}
          src={src}
          alt={alt}
          placeholder={background}
          style={{
            borderRadius: "10px",
            border: "1px solid var(--border-v1)",
          }}
        />
      </>
    );
  },
);
