"use server";

import { VertexAI } from "@google-cloud/vertexai";

const vertex_ai = new VertexAI({
  project: "prismatic-grail-421014",
  location: "europe-west3",
});
const model = "gemini-1.5-pro-preview-0409";

// Instantiate the models
const generativeModel = vertex_ai.preview.getGenerativeModel({
  model: model,
  generationConfig: {
    maxOutputTokens: 8192,
    temperature: 1,
    topP: 0.95,
  },
  safetySettings: [
    {
      category: "HARM_CATEGORY_HATE_SPEECH",
      threshold: "BLOCK_MEDIUM_AND_ABOVE",
    },
    {
      category: "HARM_CATEGORY_DANGEROUS_CONTENT",
      threshold: "BLOCK_MEDIUM_AND_ABOVE",
    },
    {
      category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
      threshold: "BLOCK_MEDIUM_AND_ABOVE",
    },
    {
      category: "HARM_CATEGORY_HARASSMENT",
      threshold: "BLOCK_MEDIUM_AND_ABOVE",
    },
  ],
});

const text = {
  text: `I will give you an image. Give a detailed description of the image, give details about the materials that the object is made of.`,
};

function getImageTypeFromBase64(base64String) {
  // Extract the first few characters from the base64 string
  const header = base64String.substring(0, 30); // Adjust the length according to your needs

  // Check if it's a PNG image
  if (header.startsWith("data:image/png")) {
    return "png";
  }

  // Check if it's a JPEG image
  if (
    header.startsWith("data:image/jpeg") ||
    header.startsWith("data:image/jpg")
  ) {
    return "jpeg";
  }

  // If it doesn't match any known format
  return "unknown";
}

export async function GetImgDescp(image) {
  try {
    let imgObj;
    const imgType = getImageTypeFromBase64(image);
    if (imgType === "png") {
      const img1 = image.replace("data:image/png;base64,", "");

      imgObj = {
        inlineData: {
          mimeType: "image/png",
          data: img1,
        },
      };
    } else if (imgType === "jpeg") {
      const img1 = image.replace("data:image/jpeg;base64,", "");
      imgObj = {
        inlineData: {
          mimeType: "image/jpeg",
          data: img1,
        },
      };
    } else {
      throw new Error("Type error");
    }
    const req = {
      contents: [
        {
          role: "user",
          parts: [text, imgObj],
        },
      ],
    };
    const res = await generativeModel.generateContent(req);
    return res;
  } catch (error) {
    console.log(error);
  }
}
