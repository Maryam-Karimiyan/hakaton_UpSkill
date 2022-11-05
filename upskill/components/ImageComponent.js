
import Image from "next/image";
import React from 'react'

function ImageComponent({src,width,height}) {
  return (
    <Image src={src} width={width}  height={height}/>
  )
}

export default ImageComponent