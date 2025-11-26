"use client";
import ImageModal from '@/components/elements/modal/ImageModal';
import Image from 'next/image'
import React, { useState } from 'react'

type typeSelectedImage = {
    title: string;
    index: number;
    images: { src: string };
}

type Props = {
  title: string;
  images: string[];
};

const DetailImage = ({title, images}: Props) => {
    const [selectedImage, setSelectedImage] = useState<typeSelectedImage | null>(null);

    const openModal = (data: typeSelectedImage) => {
        setSelectedImage(data);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

  return (
    <React.Fragment>
        <div className="flex items-center px-2 md:px-0 overflow-x-scroll hide-scrollbar py-3 md:py-4 lg:py-5">
            {images.map((src, index) => (
                <Image
                    key={index}
                    src={src}
                    alt={`${title} ${index + 1}`}
                    width={150}
                    height={100}
                    sizes="100"
                    className="relative w-1/2 sm:w-1/4 h-auto shrink-0 cursor-pointer active:scale-95 hover:scale-105 hover:rounded-2xl hover:shadow-3xl duration-300 overflow-hidden hover:z-10"
                    onClick={() => openModal({ title, index, images: { src } })}
                />
            ))}
        </div>
        <ImageModal
            selectedImage={selectedImage}
            closeModal={closeModal}
        />
    </React.Fragment>
  )
}

export default DetailImage