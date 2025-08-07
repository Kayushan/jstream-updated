import React, { forwardRef } from 'react';
import { env } from '@/env.mjs';

interface CustomImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
}

// const defaultLoader = ({ src, width, quality }: ImageLoaderProps) => {
//   // if (src[0] === "/") src = src.slice(1);
//   const cutOffIndex = src.lastIndexOf('-w');
//   src = cutOffIndex !== -1 ? src.substring(0, cutOffIndex) : src;
//   src = src.replace("'", ''); // hot fix crawl error
//   src = encodeURIComponent(src);
//   const params = [`w=${width}`];
//   if (quality) {
//     params.push(`q=${quality}`);
//   } else {
//     params.push(`q=75`);
//   }
//   const paramsString = params.join('&');
//   let urlEndpoint = '/_next/image';
//   if (urlEndpoint.endsWith('/'))
//     urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
//   return `${urlEndpoint}?url=${src}&${paramsString}`;
// };
//

const CustomImage = forwardRef(function CustomImage(
  props: CustomImageProps,
  ref: React.Ref<HTMLImageElement>,
) {
  const { fill, priority, sizes, ...imgProps } = props;
  
  return (
    <img
      {...imgProps}
      ref={ref}
      alt={props.alt || 'Jstream'}
      loading={priority ? 'eager' : 'lazy'}
    />
  );
});

export default CustomImage;
