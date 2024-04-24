"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { Button } from "@/components/ui/button";

import Image from "next/image";

import { GetImgDescp } from "@/lib/actions/ImageDescpAction";

import { useToast } from "../ui/use-toast";

import { CornerDownRight } from "lucide-react";

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

        <p className="text-center">Drag and drop the image here</p>

        <p className=" ">or</p>

        <Button type="button" variant="outline" onClick={open}>
          Click to select file
        </Button>
      </div>
    </section>
  );
}

const ShowImage = ({ image, h }) => {
  return (
    <div>
      {image !== null && (
        <div className={`relative ${h} w-full overflow-hidden`}>
          <Image
            src={image.src}
            style={{ objectFit: "contain", objectPosition: "top" }}
            alt="image"
            fill={true}
            className=""
          />
        </div>
      )}
    </div>
  );
};

function ShowRating({ data, name }) {
  let bgColor;
  if (data.grade == 1) bgColor = "red-500";
  else if (data.grade == 2) bgColor = "orange-500";
  else if (data.grade == 3) bgColor = "amber-500";
  else if (data.grade == 4) bgColor = "yellow-500";
  else if (data.grade == 5) bgColor = "green-500";

  return (
    <div className="flex w-full flex-col items-center gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="grow basis-0 space-y-1">
        <span className="text-lg font-semibold sm:text-xl lg:text-2xl">
          {name}
        </span>
        <div className="flex">
          <CornerDownRight className="max-h-6 max-w-6 grow basis-0" />
          <p className="w- max-w-screen-lg grow basis-0 lg:text-lg">
            {data.description}
          </p>
        </div>
      </div>
      <div
        className={`radial-progress text-${bgColor}`}
        style={{ "--value": (data.grade / 5) * 100, "--size": "3.5rem" }}
        role="progressbar"
      >
        <span className="text-lg font-semibold text-secondary-foreground">
          {data.grade}
        </span>
      </div>
    </div>
  );
}

function ShowRez({ image, title, descp, recycle, footprint, criticality }) {
  return (
    <div className="mx-auto w-full space-y-4">
      <div className="flex flex-col items-start justify-start gap-4 rounded-xl border-dashed border-zinc-700 sm:p-6 lg:flex-row lg:items-center lg:justify-between lg:border-2 lg:p-8">
        <div className="flex flex-col gap-1">
          <span className="self-start font-light uppercase sm:text-lg lg:text-xl">
            name
          </span>
          <h3 className="text-lg font-semibold capitalize sm:text-xl lg:text-2xl">
            {title}
          </h3>
        </div>
        {/* <div className="flex flex-col gap-1">
          <span className="font-light uppercase sm:text-lg lg:self-end lg:text-end lg:text-xl">
            description
          </span>
          <p className="text-lg font-semibold capitalize sm:text-xl lg:text-2xl">
            {descp}
          </p>
        </div> */}
      </div>
      <div className="space-y-4 rounded-xl border-dashed border-zinc-700 sm:p-6 lg:flex-row lg:items-center lg:justify-between lg:border-2 lg:p-8">
        <h4 className="self-start font-light uppercase sm:text-lg lg:text-xl">
          Uploaded Image
        </h4>
        <ShowImage image={image} h="h-36" />
      </div>
      <div className="space-y-4 rounded-xl border-dashed border-zinc-700 sm:p-6 lg:flex-row lg:items-center lg:justify-between lg:border-2 lg:p-8">
        <h4 className="self-start font-light uppercase sm:text-lg lg:text-xl">
          eco ratings
        </h4>
        <div className="space-y-16">
          <ShowRating key={1} data={recycle} name="Recyclability" />
          <ShowRating key={2} data={footprint} name="Environmental Footprint" />
          <ShowRating key={3} data={criticality} name="Material Criticality" />
        </div>
      </div>
    </div>
  );
}

export default function ImageUpload() {
  const [image, setImage] = useState(null);

  const [aiInfo, setAiInfo] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast();

  function handleAddImage(img) {
    setImage(img);
  }

  async function onSubmit(img) {
    try {
      setIsLoading(true);
      const res = await GetImgDescp(img.src);
      if (res.status === 200) {
        setAiInfo(res.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
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
      {isLoading === true ? (
        <div className="flex w-full justify-center">
          <span className="loading loading-bars loading-xs text-emerald-500"></span>
          <span className="loading loading-bars loading-sm text-emerald-500"></span>
          <span className="loading loading-bars loading-md text-emerald-500"></span>
          <span className="loading loading-bars loading-lg text-emerald-500"></span>
        </div>
      ) : aiInfo === null ? (
        <div className="mx-auto max-w-screen-sm space-y-4">
          <DropBox onDrop={onDrop} />
          <Button
            disabled={image === null}
            onClick={() => onSubmit(image)}
            type="submit"
          >
            Submit
          </Button>
          <h4 className="text-center text-xl font-semibold sm:text-2xl lg:text-3xl">
            Image Preview
          </h4>
          <ShowImage image={image} h="h-40" />
        </div>
      ) : (
        <ShowRez
          title={aiInfo.jsonName.object_name}
          descp={aiInfo.jsonName.object_descp}
          recycle={aiInfo.jsonRecycla}
          criticality={aiInfo.jsonCritic}
          footprint={aiInfo.jsonFoot}
          image={image}
        />
      )}
    </div>
  );
}
