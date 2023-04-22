export class registerCustumer {
    fullName: any;
    email: string;
    mobileNumber: string;
    password: string;





    constructor(registerCustumer?:any) {
        registerCustumer = registerCustumer || {};
        this.fullName = registerCustumer.fullName || '';
        this.email = registerCustumer.email || '';
        this.mobileNumber = registerCustumer.mobileNumber || '';
        this.password = registerCustumer.password || '';
 
    
    }
}
