import { component$ } from '@builder.io/qwik';
import { Image } from 'qwik-image';
import type { LayoutOptions, ObjectFitOptions } from '~/core/types/enum';

export const ImageMini = component$(
  ({
    onClick,
    onMouseOver,
    onMouseMove,
    onMouseOut,
    layout,
    objectFit,
    width,
    height,
    isclass,
    src,
    alt,
    background,
  }: {
    onClick?: any;
    onMouseOver?: any;
    onMouseMove?: any;
    onMouseOut?: any;
    layout: LayoutOptions;
    objectFit: ObjectFitOptions;
    width: number;
    height: number;
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
          onClick$={() => (onClick.setIsOpen = true)}
          onMouseOver$={() => (onMouseOver ? onMouseOver : () => {})}
          onMouseMove$={() => (onMouseMove ? onMouseMove : () => {})}
          onMouseOut$={() => (onMouseOut ? onMouseOut : () => {})}
          placeholder={background}
        />
      </>
    );
  }
);
