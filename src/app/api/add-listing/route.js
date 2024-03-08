 import { NextResponse } from "next/server";
 import { Readable } from "stream";
 import { Client, Account,  Databases, Storage, Role, Permission, ID, InputFile  } from "node-appwrite";
 import generateFileName from "@/components/Utility/generateFileName";

 const client = new Client()
                    .setEndpoint(process.env.APPWRITE_URL)
                    .setProject(process.env.APPWRITE_PROJECT_ID)
                    .setKey(process.env.APPWRITE_BACKEND_API_KEY);

const databases = new Databases(client);
const storage = new Storage(client);


function createReadableStream(formData, fieldName) {

  const images = formData.get('images')

  

  // console.log(typeof images)
  const results = [];
  // for (const [key, value] of formData.entries()) {

  //   if (key === fieldName) {
  //     if (Array.isArray(value)) {
  //       // If there are multiple files for the same field name
  //       for (const file of value) {
  //         if (file instanceof File) {
  //           const result = {
  //             stream: new Readable(),
  //             fileName: file.name,
  //             size: file.size
  //           };

  //           const reader = file.stream().getReader();

  //           const read = async () => {
  //             const { done, value: chunk } = await reader.read();
  //             if (done) {
  //               result.stream.push(null);
  //             } else {
  //               result.stream.push(chunk);
  //               read();
  //             }
  //           };

  //           read();
  //           results.push(result);
  //         }
  //       }
  //     } else if (value instanceof File) {
  //       // If there is only one file for the field name
  //       const result = {
  //         stream: new Readable(),
  //         fileName: value.name,
  //         size: value.size
  //       };

  //       const reader = value.stream().getReader();

  //       const read = async () => {
  //         const { done, value: chunk } = await reader.read();
  //         if (done) {
  //           result.stream.push(null);
  //         } else {
  //           result.stream.push(chunk);
  //           read();
  //         }
  //       };

  //       read();
  //       results.push(result);
  //     }
  //   }
  // }

  return results;
}

export async function POST(request, response) {




  const propertyData = await request.formData();

  // const images = propertyData.get('images')

  for (const [key, value] of propertyData.entries()) {
      if (value instanceof File) {
        console.log(true)
      }
      else{
        console.log(typeof value)
        console.log(value)
      }
  }
  // console.log(images instanceof File)
  // const imageArray =  propertyData.getAll('images')
  // imageArray.forEach((imageData, index) => {
  //   // Image data is a File object
  //   const file = imageData[0];

  //   // Your image processing logic goes here
  //   console.log(`Processing image ${index + 1}:`, file.name);
  // });
  // console.log(imageArray)
  // const token = request.headers.get('Authorization').split(' ')[1];
  // const userClient = new Client()
  //                         .setEndpoint(process.env.APPWRITE_URL)
  //                         .setProject(process.env.APPWRITE_PROJECT_ID)
  //                         .setJWT(token);
  // const userAccount = new Account(userClient);
  // const userInformation = await userAccount.get();

  // const userName = propertyData.get('name')
  // if(userName.length > 0 && userInformation['name'] !==  userName ){
  //   const userNameUpdate = await userAccount.updateName(userName)
  // }
  // const userEmail = propertyData.get('email')
  // if(userEmail.length > 0 && userInformation['email'] !==  userEmail ){
  //   const userEmailUpdate = await userAccount.updateEmail()
  // }
  // const userPhone = propertyData.get('phone')
  // if(userPhone.length > 0 && userInformation['phone'] !==  userPhone ){
  //   const userPhoneUpdate = await userAccount.updatePhone()
  // }

  



  // const userPrefUpdate = await userAccount.updatePrefs(prefsData)

  // if (userInformation && propertyData) {
    // const selectedPropertyType        = propertyData.get('selectedPropertyType')
    // const selectedBookingTypes        = propertyData.get('selectedBookingTypes')
    // const selectedPropertyFeatures    = propertyData.get('selectedPropertyFeatures')
    // const selectedAmenities           = propertyData.get('selectedAmenities')
    // const propertyTitle               = propertyData.get('propertyTitle')
    // const propertyDescription         = propertyData.get('propertyDescription')
    // const address                     = propertyData.get('address')
    // const city                        = propertyData.get('city')
    // const country                     = propertyData.get('country')
    // const thana                       = propertyData.get('thana')
    // const timeZone                    = propertyData.get('timeZone')
    // const zipCode                     = propertyData.get('zipCode')
    // const location                    = propertyData.get('location')
    // const ownersDataValidDeclaration  = propertyData.get('ownersDataValidDeclaration')
    // const readTermsCondition          = propertyData.get('readTermsCondition')
    // const roomCount                   = propertyData.get('roomCount')
    // const bedCount                    = propertyData.get('bedCount')
    // const guestCount                  = propertyData.get('guestCount')
    // const images                      = propertyData.get('images')
    // const currency                    = propertyData.get('currency')
    // const rent                        = propertyData.get('rent')
    // const serviceFee                  = propertyData.get('serviceFee')
    // const tax                         = propertyData.get('tax')
    // const checkIn                     = propertyData.get('roomCcheckInount')
    // const monthExtendStay             = propertyData.get('monthExtendStay')
    // const rebookAfterTimeFrame        = propertyData.get('rebookAfterTimeFrame')
    // const approvingMethod             = propertyData.get('approvingMethod')
    // const genderPref                  = propertyData.get('genderPref')


      const readableStreamFilesArray = createReadableStream(propertyData, 'images');

      // for (let index = 0; index < readableStreamFilesArray.length; index++) {
        // const element = array[index];
      //   const propertyImgFile = new InputFile(
      //                                 readableStreamFilesArray[index]['stream'], 
      //                                 generateFileName(readableStreamFilesArray[index]['fileName']), 
      //                                 readableStreamFilesArray[index]['size']);

      // const imageFileUpload = await storage.createFile(
      //                                   '65d1bbff9bb5fa92bc6f',
      //                                   ID.unique(),
      //                                   propertyImgFile);
      //       console.log(imageFileUpload)
        
      // }

      
      // const profileImgUpload = await storage.createFile(
      //                                         process.env.APPWRITE_USER_PROFILE_IMAGE_BUCKET_ID,
      //                                         ID.unique(),
      //                                         profileImgFile,
      //                                         [Permission.read(Role.user(userInformation['$id']+'/verified'))]);
      






    // const { stream: varificationPhotoReadableStream, fileName: varificationPhotoFrontFileName, size: varificationPhotoFrontFilesize } = createReadableStream(propertyData, 'verificationDocFront');
    // const verificationImgFileFront = new InputFile(varificationPhotoReadableStream, generateFileName(varificationPhotoFrontFileName), varificationPhotoReadableStream.readableLength);
    // const verificationImgFileFrontUpload = await storage.createFile(
    //                                         process.env.APPWRITE_USER_VERFIFICATION_FILE_BUCKET_ID,
    //                                         ID.unique(),
    //                                         verificationImgFileFront,
    //                                         [Permission.read(Role.user(userInformation['$id']+'/verified'))]);

    // const { stream: varificationPhotoBackReadableStream, fileName: varificationPhotoBackFileName, size: varificationPhotoBackFilesize } = createReadableStream(propertyData, 'verificationDocBack');
    // const verificationDocFileBack = new InputFile(varificationPhotoBackReadableStream, generateFileName(varificationPhotoBackFileName), varificationPhotoReadableStream.readableLength);
    // const verificationImgFileBackUpload = await storage.createFile(
    //                                         process.env.APPWRITE_USER_VERFIFICATION_FILE_BUCKET_ID,
    //                                         ID.unique(),
    //                                         verificationDocFileBack,
    //                                         [Permission.read(Role.user(userInformation['$id']+'/verified'))]);

    // if (profileImgUpload && verificationImgFileFrontUpload && verificationImgFileBackUpload){

    //   console.log(profileImgUpload);
    //   console.log(verificationImgFileFrontUpload);
    //   console.log(verificationImgFileBackUpload);


    //   const verificationDocInfo = {
    //             userId: userInformation['$id'],
    //             filesIdRefs: [verificationImgFileFrontUpload['$id'], verificationImgFileBackUpload['$id'],],
    //             verificationDocType: propertyData.get('verificationDocType')
    //          }
    //   const verificationInfoResult =  await databases.createDocument
    //                                 (
    //                                     process.env.APPWRITE_DB_BEDBD_ID,
    //                                     process.env.APPWRITE_USER_VERFIFICATION_INFO_COLLECTION_ID,
    //                                     ID.unique(),
    //                                     verificationDocInfo,
    //                                     [Permission.read(Role.user(userInformation['$id']+'/verified'))]
    //                                 )

    // const profilePhotoInfo = {  userId: userInformation['$id'],
    //                             profilePhotoID: profileImgUpload['$id']}

    // const profilePhotoInfoResult =  await databases.createDocument
    //                                 (
    //                                     process.env.APPWRITE_DB_BEDBD_ID,
    //                                     process.env.APPWRITE_USER_PROFILE_INFO_COLLECTION_ID,
    //                                     ID.unique(),
    //                                     profilePhotoInfo,
    //                                     [Permission.read(Role.user(userInformation['$id']+'/verified'))]
    //                                 )
    // }



  // }

  return NextResponse.json({ id: 'uuid' });
}