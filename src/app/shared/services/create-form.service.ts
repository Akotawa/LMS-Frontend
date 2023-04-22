import { Injectable } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class CreateFormService {

    emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
    //Must contain number, uppercase latter, lowercase latter, special characters, and at least 8 or more characters
    passwordRegex = "(?=^.{8,50}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$"
    constructor(
        private _formBuilder: FormBuilder
    ) { }

    createLoginForm(): FormGroup {
        return this._formBuilder.group({
            // appId:'',
            username: ['', Validators.required],
            // password: ['',  [Validators.required, Validators.pattern(this.passwordRegex)]]
            password: ['', [Validators.required]]
        });
    }

    createRegisterForm(): FormGroup {
        const formOptions = {
            'firstName': ['', Validators.required],
            'lastName': ['', Validators.required],
            'email': ['', [Validators.required, Validators.pattern(this.emailRegex)]],
            // 'password': ['', [Validators.required, Validators.pattern(this.passwordRegex)]],
            'password': ['', [Validators.required]],
            'passwordConfirm': ['', Validators.required],
            isOutsider: true
        };
        return this._formBuilder.group(formOptions, {
            validator: this.matchingPasswordsValidator('password', 'passwordConfirm')
        });
    }

    matchingPasswordsValidator(passwordKey: string, confirmPasswordKey: string): any {
        return (group: FormGroup) => {
            const password = group.controls[passwordKey];
            const confirmPassword = group.controls[confirmPasswordKey];

            if (!password.value || !confirmPassword.value) {
                return null;
            }
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
            return null;
        };
    }

    /**
     * Create user form
     * 
     * @param user 
     */
    createUserForm(user: User): FormGroup {
        return this._formBuilder.group({
            id: user ? [user.id] : null,
            email: [user ? user.email : null, [Validators.required, Validators.email]],
            fullName: user ? [user.fullName] : null,
            homeAddress: user ? [user.homeAddress] : null,
            mobileNumber: user ? [user.mobileNumber] : null,
            profileImage: user ? [user.profileImage] : null,
            password: user ? [user.password] : null,
         
        });
    }

}
