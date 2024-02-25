 import { NextResponse } from "next/server";
 const sdk = require('node-appwrite');
 import { Readable } from "stream";
 import { Client, Account,  Databases, Storage, Role, Permission, ID, InputFile  } from "node-appwrite";

 const fs = require('fs');
 const path = require('path');
 
 import generateFileName from "@/components/Utility/generateFileName";



 const client = new Client()
                    .setEndpoint(process.env.APPWRITE_URL)
                    .setProject(process.env.APPWRITE_PROJECT_ID)
                    .setKey(process.env.APPWRITE_API_KEY);
const databases = new Databases(client);
const storage = new Storage(client);



async function uploadIdentificationImages(files, userId){
  try {
      const promises = files.map(async file => {

        // function createFileFromBuffer(buffer, fileName, fileType) {
        //   const fileStream = fs.createWriteStream(fileName);
        //   fileStream.write(buffer);
        //   fileStream.end();        
        //   console.log(`File '${fileName}' created successfully`);
        // }
          // const fileName = generateFileName(file.name)

          // const file = fs.writeFileSync(fileName, fileContent)
          // const fileData = Buffer.from(file, 'binary');          
          // createFileFromBuffer(fileData, fileName, fileType)

          // return await storage.createFile(
          //     process.env.APPWRITE_USER_VERFIFICATION_FILE_BUCKET_ID,
          //     ID.unique(),
          //     fileData,
          //     [ Permission.read(Role.user(userId+'/verified')) ]
          // )
          // return {id:uploadResult['$id'], storageBucket:uploadResult['bucketId'], fileName:uploadResult['name'], fileType:uploadResult['mimeType']}
      })
      return await Promise.all(promises);
  } catch (error) {
      
  }
}

export async function POST(request, response) {
  const registrationData = await request.formData();
  const token = request.headers.get('Authorization').split(' ')[1];
  const userClient = new Client()
                          .setEndpoint(process.env.APPWRITE_URL)
                          .setProject(process.env.APPWRITE_PROJECT_ID)
                          .setJWT(token);
  const userAccount = new Account(userClient);
  const userInformation = await userAccount.get();


  function createReadableStream(formData, fieldName) {
    const result = {
      stream: new Readable(),
      fileName: null,
    };

    // Iterate over each part in the FormData
    for (const [key, value] of formData.entries()) {
      if (key === fieldName) {
        // If the part matches the specified field name
        if (value instanceof File) {
          result.fileName = value.name; // Set the file name
          const reader = value.stream().getReader();

          const read = async () => {
            const { done, value: chunk } = await reader.read();

            if (done) {
              result.stream.push(null); // Signal the end of the stream
            } else {
              result.stream.push(chunk);
              read();
            }
          };

          read();
        } else {
          console.error('Field is not a File instance.');
          result.stream.push(null); // Signal the end of the stream
        }
      }
    }

    return result;
  }

  if (registrationData) {
    const { stream: userPhotoReadableStream, fileName: userProfilePhotoFileName } = createReadableStream(registrationData, 'userPhoto');
    const imgFile = new InputFile(userPhotoReadableStream, generateFileName(userProfilePhotoFileName), userPhotoReadableStream.readableLength);

    const profileImageUpload = await storage.createFile(
      process.env.APPWRITE_USER_PROFILE_IMAGE_BUCKET_ID,
      ID.unique(),
      imgFile,
      [Permission.read(Role.user(userInformation['$id']+'/verified'))]
    );

    if (profileImageUpload) {
      console.log(profileImageUpload);
    }
  }

  return NextResponse.json({ id: 'uuid' });
}