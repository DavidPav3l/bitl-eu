"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { Button } from "@/components/ui/button";

import Image from "next/image";

import { GetImgDescp } from "@/lib/actions/ImageDescpAction";

import { useToast } from "../ui/use-toast";

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
        className="flex h-40 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-neutral-300 p-2 transition-all duration-300 ease-in-out hover:border-neutral-500"
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

const ShowImage = ({ image }) => {
  return (
    <div>
      {image !== null && (
        <div className="space-y-4">
          <h2 className="text-center text-xl font-semibold sm:text-2xl lg:text-3xl">
            Image Preview
          </h2>
          <div className="relative h-60 w-full overflow-hidden">
            <Image
              src={image.src}
              style={{ objectFit: "contain", objectPosition: "top" }}
              alt="image"
              fill={true}
              className=""
            />
          </div>
        </div>
      )}
    </div>
  );
};

function ShowRez({ image }) {
  return (
    <div>
      <h3></h3>
    </div>
  );
}

export default function ImageUpload() {
  const [image, setImage] = useState(null);

  const [aiInfo, setAiInfo] = useState(null);

  const { toast } = useToast();

  function handleAddImage(img) {
    setImage(img);
  }

  async function onSubmit(img) {
    try {
      const res = await GetImgDescp(img.src);
      if (res.status === 200) {
        console.log(res.data);
        setAiInfo(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 1) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "You can only add one image!",
      });
      return;
    }
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
    <div>
      {aiInfo === null ? (
        <div className="mx-auto max-w-screen-sm space-y-4">
          <DropBox onDrop={onDrop} />
          <Button
            disabled={image === null}
            onClick={() => onSubmit(image)}
            type="submit"
          >
            Submit
          </Button>
          <ShowImage image={image} />
        </div>
      ) : (
        <div>
          <h1>YUpi</h1>
        </div>
      )}
    </div>
  );
}
