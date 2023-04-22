export class RegisterLaundry {
    firstName: any;
    lastName: string;
    email: string;
    companyName: string;
    city: string;
    country: string;
    businessType: string;
    mobileNumber: string;
  

    constructor(registerLaundry?:any) {
        registerLaundry = registerLaundry || {};
        this.firstName = registerLaundry.firstName || '';
        this.lastName = registerLaundry.lastName || '';
        this.email = registerLaundry.email || '';
        this.companyName = registerLaundry.companyName || '';
        this.city = registerLaundry.city || '';
        this.country = registerLaundry.country || '';
        this.businessType = registerLaundry.businessType || '';
        this.mobileNumber = registerLaundry.mobileNumber || '';
    
    }
}