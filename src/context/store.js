export const store = {
    account:{},
    userTermsAndConditions:[],
    registration:{},
    property:{  
        propertyTypes:[],
        bookingTypes:[{     id:0,
                            title:'Entire place',
                            description:'Guests have access to the entire place and don’t have to share it with the host or other guests.'
                        },{ id:1,
                            title:'A private room',
                            description:'Guests can book a room within the property. There are common areas that are shared with either the host or other guests.' }],
        selectedBookingType:[],

        propertyFeatures:[],
        selectedPropertyFeatures:[],

        countryList:[],
        selectedPropertyType:'',
        
        title:'',
        address:{   aptFloor: '', 
                    streetAddress: '', 
                    addressOne: '', 
                    addressTwo: ''},
        // country:'',
        // countryCode:'',

        country:{name: '', code: ''},
        city:{ name:'', lat:'', lng:'' },
        district:{},
        thana:{},
        timeZone:'',
        zipCode:'',
        location:{},
        roomCount:[],
        bedCount:[],
        guestCount:[],

        homeRules:[],
        selectedHomeRules:[],

        checkInTime:[],
        checkOutTime:[],
        
        propertyDescription:'',
        images:[],
        rentInfo:{},
        amenities:[],
        selectedAmenities:[],
        availability:{
            checkIn:'',
            monthExtendStay:'',
            rebookAfterTimeFrame:''
        },
        approvingMethod:'',
        genderPref:'',
        termsConditions:{
            legitimateDeclaration:false,
            readTermsCondition:false
        }
    },
};