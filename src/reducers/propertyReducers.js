export default function propertyReducers(initialData, {type, data}) {
    switch (type) {
        // case "login": {
        //     return {...initialData, ...data}
        //   }
        case 'property/addCountryList':{
            return { ...initialData, countryList:data }
        }
        case 'property/select':{
            return { ...initialData, selectedPropertyType:data }
        }case 'property/addBookingType':{
            return { ...initialData, selectedBookingType:data }
        }
        case 'property/addTypes':{
            return { ...initialData, propertyTypes:data }
        }
        case 'property/addFeatures':{
            return { ...initialData, propertyFeatures:data }
        }
        case 'property/addSelectedFeatures':{
            return { ...initialData, selectedPropertyFeatures:data }
        }
        case 'property/addTitle':{
            return { ...initialData, title:data }
        }
        case 'property/addDescription':{
            return { ...initialData, propertyDescription:data }
        }

        case 'property/address':{
            return { ...initialData, address:data }
        }
        case 'property/country':{
            return { ...initialData, country:data }
        }
        case 'property/city':{
            return { ...initialData, city:data }
        }
        case 'property/district':{
            return { ...initialData, district:data }
        }
        case 'property/thana':{
            return { ...initialData, thana:data }
        }
        case 'property/timeZone':{
            return { ...initialData, timeZone:data }
        }
        case 'property/zipCode':{
            return { ...initialData, zipCode:data }
        }
        case 'property/homeRules':{
            return { ...initialData, homeRules:data }
        }
        case 'property/checkIn':{
            return { ...initialData, checkInTime:data }
        }
        case 'property/checkOut':{
            return { ...initialData, checkOutTime:data }
        }
        
        case 'property/roomCount':{
            return { ...initialData, roomCount:data }
        }
        case 'property/bedCount':{
            return { ...initialData, bedCount:data }
        }
        case 'property/guestCount':{
            return { ...initialData, guestCount:data }
        }
        case 'property/images':{
            return { ...initialData, images:data }
        }
        case 'property/rentInfo':{
            return { ...initialData, rentInfo:data }
        }
        

        // case 'update-preferences':{
        //     return {
        //         ...initialData,
        //         prefs:{  
        //             ...initialData['prefs'],
        //             ...data
        //             }, 
        //         }
        // }
        
        // case 'update-user-pref':{
        //     return { 
        //             ...initialData, 
        //                    ...data,
        //             prefs: {
        //                 ...initialData['prefs'],
        //                 ...data['prefs']
        //             }                        
        //         }
        // }
        // case "update": {
        //     return tasks.map(t => {
        //       if (t.id === action.task.id) {
        //         return action.task;
        //       } else {
        //         return t;
        //       }
        //     });
        //   }
        case "logout": {
            return {}
        }

        default: {
            throw Error(`No action matched with ${type}`);
        }
    }
}