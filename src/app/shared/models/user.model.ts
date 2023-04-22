export class User {
    id: string;
    email: string;
    homeAddress:any
    password: string;

    fullName: any;

    mobileNumber: any;
    profileImage: any;
   

    constructor(user?) {
        user = user || {};
        this.id = user.id || null;
      
        this.password = user.password || null;
        this.email = user.email || null;
        this.fullName = user.fullName || null;
        this.homeAddress = user.homeAddress || null;
        this.mobileNumber = user.mobileNumber || null;
        this.profileImage = user.profileImage || null;
  
    }
}
