import { ID, Storage, Permission, Role, Databases, Query } from "appwrite";
import conf from "@/conf/config";
import appwriteClient from "./config";

export class ListingService{
    databases;
    bedbdDbId;
    propertyTypesCollection;
    propertyAmenitiesCollection
    homeRulesCollection
    // termsConditionCollectionId
    constructor(){
        this.databases                     = new Databases(appwriteClient)
        this.bedbdDbId                     = conf.appwriteBedbdDatabaseId
        this.propertyTypesCollection       = conf.propertyTypeCollectionId
        this.propertyFeaturesCollection    = conf.propertyFeaturesCollectionId
        this.amenitiesCollection           = conf.amenitiesCollectionId
        this.homeRulesCollection           = conf.homeRulesCollectionId
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
    async getPropertyFeatures(){
        // console.log('get-property-feature')
        try {
            const data =  await this.databases
                                    .listDocuments(
                                        this.bedbdDbId,
                                        this.propertyFeaturesCollection)

            return data['documents']
                        .map(i=> ({           id: i['$id'],
                                           title: i['title'],                                  
                                     description: i['description'],
                                  apartmentTypes: i['apartmentTypes']}))
            // return data   
        } catch (err) {
            return false
        }
    }
    async getAmenities(){
        // console.log('get-property-feature')
        try {
            const data =  await this.databases
                                    .listDocuments(
                                        this.bedbdDbId,
                                        this.amenitiesCollection)

            return data['documents']
                        .map(i=> ({           id: i['$id'],
                                           title: i['title'],                                  
                                     description: i['description'],
                                            icon: i['icon'],
                                        category: i['category']}))
            // return data   
        } catch (err) {
            return false
        }
    }
    async getHomeRules(){
        // console.log('get-property-feature')
        try {
            const data =  await this.databases
                                    .listDocuments(
                                        this.bedbdDbId,
                                        this.homeRulesCollection)

            return data['documents']
                        .map(i=> ({           id: i['$id'],
                                           title: i['title'],                                  
                                     description: i['description']}))
        } catch (err) {
            return false
        }
    }
    // async getCountryLis(){
    //     // console.log('get-property-feature')
    //     try {
    //         const data =  await this.databases
    //                                 .listDocuments(
    //                                     this.bedbdDbId,
    //                                     this.propertyFeaturesCollection)

    //         return data['documents']
    //                     .map(i=> ({           id: i['$id'],
    //                                     typeName: i['title'],                                  
    //                              typeDescription: i['description'],
    //                               apartmentTypes: i['apartmentTypes']}))
    //         // return data   
    //     } catch (err) {
    //         return false
    //     }
    // }
}

const listingService = new ListingService()
export default listingService