import { NextResponse } from "next/server";
import { Readable } from "stream";
import { Client, Account,  Databases, Storage, Role, Permission, ID, InputFile  } from "node-appwrite";
import generateFileName from "@/components/Utility/generateFileName";
import { numberToWords } from "@/components/Utility/numberToWords";


const client = new Client()
                   .setEndpoint(process.env.APPWRITE_URL)
                   .setProject(process.env.APPWRITE_PROJECT_ID)
                   .setKey(process.env.APPWRITE_BACKEND_API_KEY);

const databases = new Databases(client);
const storage = new Storage(client);


function createReadableStream(file) {
 const result = {
   stream: new Readable(),
   fileName: null,
   size:null,
 };


 if (file instanceof File) {
     result.fileName = file.name;
     result.size = file.size;
     const reader = file.stream().getReader();
     const read = async () => {
       const { done, value: chunk } = await reader.read();
       if (done) {
         result.stream.push(null);
       } else {
         result.stream.push(chunk);
         read();
       }
     };
     read();
     } else {
       result.stream.push(null);
     }

 return result;
}

export async function POST(request, response) {

 const propertyData = await request.formData();

let propertyType = '';
let bookingTypes = [];
let features = []
let amenities = []
let homeRules = []
let address = '';
let cityName = '';
let countryName = '';
let thanaName = '';
let zipCode='';
let isDataValidDeclaration = false;
let readTermsCondition = false;
let roomCount = []
let bedCount =[]
let guestCount =[]
let currency = ''
let serviceFee = 0
let tax = 1
let rent = 21
let whenCheckIn = ''
let allowMonthExtendStay = false
let allowBookingAfterTimeFrame = false
let checkInStartTime = 0
let checkInEndTime = 0
let checkOutStartTime = 0
let checkOutEndTime = 0


// const allBookingTypes = propertyData.getAll('bookingTypes').map(i=>JSON.parse(i)['title'])
// console.log(allBookingTypes)




// console.log(bedCount)
try {
 const propertyObj = Object.values(JSON.parse(propertyData.get('propertyType')))
 propertyType = ('name' in propertyObj) ? propertyObj['name']: ''
} catch (error) {}


try {
 bookingTypes = propertyData.getAll('bookingTypes').map(i=>JSON.parse(i)['title'])
} catch (error) {}


try {
 features = propertyData.getAll('features').map(i=>JSON.parse(i)['title'])
} catch (error) {}


try {
 amenities = propertyData.getAll('amenities').map(i=>JSON.parse(i)['title'])
} catch (error) {}

try {
  homeRules = propertyData.getAll('homeRules').map(i=>JSON.parse(i)['title'])
 } catch (error) {}


try {
 address = Object.values(JSON.parse(propertyData.get('address'))).map(i=>i).join(', ')
} catch (error) {}


try {
 const countryObj = JSON.parse(propertyData.get('country'))
 cityName = ('name' in cityObj) ? cityObj['name']: ''
} catch (error) {}


try {
 const cityObj = JSON.parse(propertyData.get('city'))
 countryName = ('name' in countryObj) ? countryObj['name']: ''
} catch (error) {}


try {
 const thanaObj = JSON.parse(propertyData.get('thana'))
 thanaName = ('name' in thanaObj) ? thanaObj['name']: ''
} catch (error) {}


try {
 zipCode = JSON.parse(propertyData.get('zipCode'))
} catch (error) {}


try {
 isDataValidDeclaration = JSON.parse(propertyData.get('ownersDataValidDeclaration'))
} catch (error) {}

try {
 readTermsCondition = JSON.parse(propertyData.get('readTermsCondition'))
} catch (error) {}

try {
 roomCount = propertyData.getAll('roomCount').map(i=>{
   const itemObj = JSON.parse(i)
   return numberToWords(itemObj['count']) + ' ' + itemObj['name']
 })
} catch (error) {}


try {
 bedCount = propertyData.getAll('bedCount').map(i=>{
   const itemObj = JSON.parse(i)
   return numberToWords(itemObj['count']) + ' ' + itemObj['name']
 })


} catch (error) {}
try {
 guestCount = propertyData.getAll('guestCount').map(i=>{
   const itemObj = JSON.parse(i)
   return itemObj['type'] + ' ' + numberToWords(itemObj['count'])+' person'
 })
} catch (error) {}



try {
 const rentInfo = JSON.parse(propertyData.get('rent'))
 currency = rentInfo['currency']
 serviceFee = rentInfo['serviceFee']
 tax = rentInfo['tax']
 rent = rentInfo['rent']
} catch (error) {}
try {
 const availability = JSON.parse(propertyData.get('availability'))  
 whenCheckIn = availability['checkIn']
 allowMonthExtendStay = availability['monthExtendStay'] === 'yes'
 allowBookingAfterTimeFrame = availability['rebookAfterTimeFrame'] === 'yes'
} catch (error) {}




try {
  const checkInTime = JSON.parse(propertyData.get('checkInTime'))


  checkInStartTime = checkInTime[0]
checkInEndTime = checkInTime[0]

 } catch (error) {}


 try {
  const checkOutTime = JSON.parse(propertyData.get('checkOutTime'))
  checkOutStartTime = checkOutTime[0]
  checkOutEndTime = checkOutTime[1]
 } catch (error) {}


// console.log()
// 
// console.log(propertyData.get('approvingMethod'))
// console.log(propertyData.get('genderPref'))



 const property = {
   propertyUID:'SAMPLE_UUID',
   propertyType:propertyType,
   tilte: propertyData.get('propertyTitle'),
   description: propertyData.get('description'),
   address:address,
   city: cityName,
   country:countryName,
   thana:thanaName,
   timezone:JSON.parse(propertyData.get('timezone')),
   zipCode:zipCode,
   bookingTypes:bookingTypes,
   features:features,
   amenities:amenities,
   homeRules:homeRules,
   isDataValidDeclaration:isDataValidDeclaration,
   readTermsCondition:readTermsCondition,
   roomCount:roomCount,
   bedCount:bedCount, 
   guestCount: guestCount,
   currency:currency,
   serviceFee:serviceFee,
   tax:tax,
   rent:rent,
   whenCheckIn:whenCheckIn,
   allowMonthExtendStay:allowMonthExtendStay,
   allowBookingAfterTimeFrame:allowBookingAfterTimeFrame,
   approvingMethod: propertyData.get('approvingMethod'),
   genderPreference: propertyData.get('genderPref'),
   checkInStartTime:checkInStartTime,
   checkInEndTime:checkInEndTime,
   checkOutStartTime:checkOutStartTime,
   checkOutEndTime:checkOutEndTime
 }

 console.log(property)


 // Image upload Code ...
 // ***************************
 // const imageUploadPromises = []
 // for (const [key, value] of propertyData.entries()) {
 //   if(key==='image'){
 //     const { stream: propertyImageStream, fileName: propertyImageFileName,  size: fileSize  } = createReadableStream(value);
 //     const imageFile = new InputFile(propertyImageStream, generateFileName(propertyImageFileName), fileSize);
 //     const imageUploadPromise = await storage.createFile(
 //                                           process.env.APPWRITE_PROPERTY_IMAGE_FILE_BUCKET_ID,
 //                                           ID.unique(),
 //                                           imageFile);
 //     imageUploadPromises.push(imageUploadPromise);
 //   }
 // }

 // try {
 //   const imageUploadResults = await Promise.all(imageUploadPromises);
 //   console.log(imageUploadResults)
 // } catch (error) {
   
 // }
    
 return NextResponse.json({ id: 'uuid' });
}