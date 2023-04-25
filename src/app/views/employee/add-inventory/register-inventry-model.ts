export class RegisterLaundry {
    userName: any;
    itemName: string;
    email: string;
    itemDescription: string;
    payment: string;
    quantity: string;
 
  

    constructor(registerLaundry?:any) {
        registerLaundry = registerLaundry || {};
        this.userName = registerLaundry.userName || '';
        this.itemName = registerLaundry.itemName || '';
        this.email = registerLaundry.email || '';
        this.itemDescription = registerLaundry.itemDescription || '';
        this.payment = registerLaundry.payment || '';
        this.quantity = registerLaundry.quantity || '';
 
    
    }
}
