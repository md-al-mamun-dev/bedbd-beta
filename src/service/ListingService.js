import { ID, Storage, Permission, Role, Databases, Query } from "appwrite";
import conf from "@/conf/config";
import appwriteClient from "./config";


export class ListingService{
    databases;
    bedbdDbId;
    propertyTypesCollection;
    // termsConditionCollectionId
    constructor(){
        this.databases                  = new Databases(appwriteClient)
        this.bedbdDbId                  = conf.appwriteBedbdDatabaseId
        this.propertyTypesCollection    = conf.propertyTypeCollectionId
    }

    
    async getPropertyTypes(){
        try {
            const data =  await this.databases
                                    .listDocuments(
                                        this.bedbdDbId,
                                        this.propertyTypesCollection)

            return data['documents']
                        .map(i=> ({           id: i['$id'],
                                        typeName: i['typeName'],
                                 typeDescription: i['typeDescription'],
                                            icon: i['icon'],
                                        iconType: i['iconType']      }))
            // return data   
        } catch (err) {
            return false
        }
    }
}

const listingService = new ListingService()
export default listingService