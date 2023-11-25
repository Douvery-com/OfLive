import { component$ } from '@builder.io/qwik';
import { Image } from 'qwik-image';
import type { LayoutOptions, ObjectFitOptions } from '~/core/types/enum';

export const ImageLargue = component$(
  ({
    onClick,
    onMouseOver,
    onMouseMove,
    onMouseOut,
    layout,
    objectFit,
    width,
    height,
    isId,
    isclass,
    src,
    alt,
    title,
    background,
  }: {
    onClick: any;
    onMouseOver: any;
    onMouseMove: any;
    onMouseOut: any;
    layout: LayoutOptions;
    objectFit: ObjectFitOptions;
    width: number;
    height?: number | string;
    isId: string;
    isclass: string;
    priority: boolean;
    src: string;
    alt: string;
    title?: string;
    background?: string;
  }) => {
    return (
      <>
        <Image
          width={width}
          height={height as any}
          layout={layout as any}
          objectFit={objectFit}
          id={isId}
          class={isclass}
          src={src}
          alt={alt}
          title={title}
          onClick$={() => (onClick.setIsOpen = true)}
          onMouseOver$={onMouseOver}
          onMouseMove$={onMouseMove}
          onMouseOut$={onMouseOut}
          placeholder={background}
        />
      </>
    );
  }
);
