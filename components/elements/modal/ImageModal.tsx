"use client";
import Image from "next/image";
import { motion as m, AnimatePresence } from "framer-motion";
import { useLayoutEffect } from "react";

type ImageModalProps = {
  selectedImage: {
    title: string;
    index: number;
    images: { src: string };
  } | null;
  closeModal: () => void;
};

const ImageModal: React.FC<ImageModalProps> = ({ selectedImage, closeModal }) => {

  useLayoutEffect(() => {
    if (selectedImage !== null) {
    document.body.style.overflow = "hidden";
    } else {
    document.body.style.overflow = "unset";
    }
    return () => {
    document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <AnimatePresence>
      {selectedImage !== null && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-80 flex items-center justify-center"
          onClick={closeModal}
        >

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-[87%] md:w-[40%] z-100"
          >
            <Image
              src={selectedImage.images.src}
              alt={`${selectedImage.title} ${selectedImage.index + 1}`}
              width={2000}
              height={1600}
              className="rounded-2xl shadow-2xl object-contain w-full h-full"
              priority
            />
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;