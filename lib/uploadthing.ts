import { OurFileRouter } from "@/app/api/UploadThing/core";
import {
    generateUploadButton,
    generateUploadDropzone,
    generateReactHelpers
  } from "@uploadthing/react";
   
  
   
  export const UploadButton = generateUploadButton<OurFileRouter>();
  export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
  export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();