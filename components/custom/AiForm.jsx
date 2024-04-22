"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { Button } from "@/components/ui/button";

import { X } from "lucide-react";

import Image from "next/image";

import { GetImgDescp } from "@/lib/actions/ImageDescpAction";

function DropBox({ onDrop }) {
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
    onDrop,
    noClick: true,
    noKeyboard: true,
  });

  return (
    <section>
      <div
        className="flex h-40 flex-col items-center justify-center rounded-lg border-2 border-dashed border-neutral-300 p-2 transition-all duration-300 ease-in-out hover:border-neutral-500"
        {...getRootProps()}
      >
        <input {...getInputProps()} />

        <p className="text-center">Drag and drop the images here</p>

        <p className=" ">or</p>

        <Button type="button" variant="outline" onClick={open}>
          Click to select file
        </Button>
      </div>
    </section>
  );
}

const ShowImage = ({ images, handleRemoveImage }) => {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">Images</h2>
      <ul className="flex flex-wrap items-center justify-start gap-5">
        {images.map((image) => (
          <li key={image.id} className="relative h-40 w-56 overflow-visible">
            <Image
              src={image.src}
              alt="image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <Button
              type="button"
              variant="destructive"
              className="absolute -right-1 -top-1 z-20 h-[1.75rem] w-[1.75rem] rounded-full bg-white p-0.5 shadow-md shadow-neutral-700"
              onClick={() => handleRemoveImage(image.id)}
            >
              <X className="h-6 w-6 text-black" />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function ImageUpload({}) {
  const [images, setImages] = useState([]);

  function handleAddImage(image) {
    setImages((prevState) => [image]);
  }

  function handleRemoveImage(id) {
    setImages((prevState) => prevState.filter((image) => image.id !== id));
  }

  async function onSubmit(img) {
    try {
      const res = await GetImgDescp(img[0].src);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file, index) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        const image = {
          id: Date.now() + Math.random(),
          src: e.target.result,
        };
        handleAddImage(image);
      };
      reader.readAsDataURL(file);
      return file;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <DropBox onDrop={onDrop} />
      <div className="flex items-center justify-between">
        <Button
          disabled={images.length === 0}
          onClick={() => onSubmit(images)}
          type="submit"
        >
          Submit
        </Button>
      </div>
      <ShowImage images={images} handleRemoveImage={handleRemoveImage} />
    </div>
  );
}
