import { ID, Storage, Permission, Role } from "appwrite";
import conf from "@/conf/config";
import generateFileName from "@/components/Utility/generateFileName";
import appwriteClient from "./config";


export class StorageService{
    storage;
    constructor(){
        this.storage = new Storage(appwriteClient)
    }

    async uploadProfileImage(file, userId){
        const fileName = generateFileName(file.name)
        const fileData = new window.File([file], fileName, {type: file.type})
        try {
            return await this.storage.createFile(
                conf.appwriteUserProfileImageBucket,
                ID.unique(),
                fileData,
                [ Permission.read(Role.user(userId+'/verified')) ]
            )
        } catch (error) {
            console.log('Appwrite service :: uploadFile :: error', error);
            return false; 
        }
    }
    async uploadIdentificationImage(file, userId){
        const fileName = generateFileName(file.name)
        const fileData = new window.File([file], fileName, {type: file.type})
        try {
            return await this.storage.createFile(
                conf.appwriteUserVerificationFileBucket,
                ID.unique(),
                fileData,
                [ Permission.read(Role.user(userId+'/verified')) ]
            )
        } catch (error) {
            console.log('Appwrite service :: uploadFile :: error', error);
            return false; 
        }
    }

    async uploadIdentificationImages(files, userId){
        try {
            const promises = files.map(async file => {
                const fileName = generateFileName(file.name)
                const fileData = new window.File([file], fileName, {type: file.type})
                return await this.storage.createFile(
                    conf.appwriteUserVerificationFileBucket,
                    ID.unique(),
                    fileData,
                    [ Permission.read(Role.user(userId+'/verified')) ]
                )
                return {id:uploadResult['$id'], storageBucket:uploadResult['bucketId'], fileName:uploadResult['name'], fileType:uploadResult['mimeType']}
            })
            return await Promise.all(promises);
        } catch (error) {
            
        }
    }

    async createUserVerificationData(data){
        try {
            
        } catch (error) {
            
        }
    }



}

const storageService = new StorageService()
export default storageService