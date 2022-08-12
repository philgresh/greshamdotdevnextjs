import React from 'react';
import NextImage from 'next/image';

// opt-out of image optimization, no-op
const customLoader = ({ src }: any) => src;

export default function Image(props: any) {
  return <NextImage {...props} loader={customLoader} />;
}
