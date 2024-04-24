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
  text: `You will be given an image of an object. Your only job is to name the object and view it from a environmental point of view and grade it, from 1 to 5 on three categories: 
  "recyclability" (How easy it is to recycle and how reusable it is. 1 means very bad recyclability, 5 means very high recyclability),
   
  "environmental_footprint" (This encompasses the pollution, resource consumption, and overall environmental impact associated with the manufacturing process. 1 means very high environmental_footprint, 5 means very low environmental_footprint),
  
  "object_criticality" (Importance or necessity of the standard materials used for that object, in relation to ,alternative, eco friendly materials. 1 means very low dependence on standard materials for the object to keep its original qualities and uses, 5 means very high dependence on standard materials for the object to keep its original qualities and uses);
  
  You should also give a short description for each category that explains why you gave it that grade.
  
  You must also give some "object_data" that contains an "object_name", the name of the object you have detected in the image and an "object_descp" a very short description of the object you have detected.

  Please provide a response in a structured JSON format that matches the following model: 
  {
    "object_data":{
      "object_name":"name of the object",
      "object_descp: "descp of the object",
    }
    "recyclability":
    {
      "grade": "Example grade",
      "description": "Example description",
    },
    "environmental_footprint":
    {
      "grade": "Example grade",
      "description": "Example description",
    },
    "object_criticality":
    {
      "grade": "Example grade",
      "description": "Example description",
    }
  }
  The image is: `,
};

const pattern = new RegExp("\\{[^{}]*\\}", "g");

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
    const resText = res.response.candidates[0].content.parts[0].text;
    const matches = resText.match(pattern);
    if (!matches || matches.length <= 0) {
      throw new Error("JSON error");
    }

    const jsonName = JSON.parse(matches[0]);
    const jsonRecycla = JSON.parse(matches[1]);
    const jsonFoot = JSON.parse(matches[2]);
    const jsonCritic = JSON.parse(matches[3]);

    return {
      status: 200,
      data: {
        jsonRecycla,
        jsonFoot,
        jsonCritic,
        jsonName,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
