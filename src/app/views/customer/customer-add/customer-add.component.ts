import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UtilityService } from "../../../shared/services/utility.service";
import { AdminService } from "../../admin/admin.service";

@Component({
  selector: "app-customer-add",
  templateUrl: "./customer-add.component.html",
  styleUrls: ["./customer-add.component.scss"],
})
export class CustomerAddComponent implements OnInit {
  registerCustomerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _adminService: AdminService,
    public _utilityService: UtilityService,

    private router: Router
  ) {
    const emailRegex =
      "^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$";
    const formOptions = {
      email: ["", Validators.required],
      fullName: ["", Validators.required],
      mobileNumber: ["", [Validators.required, Validators.pattern(emailRegex)]],
      password: ["", Validators.required],
    };

    this.registerCustomerForm = this.formBuilder.group(formOptions, {
      // validator: this.matchingPasswordsValidator('password', 'passwordConfirm')
    });
  }

  ngOnInit() {}

  //   matchingPasswordsValidator(passwordKey: string, confirmPasswordKey: string): any {
  //     return (group: FormGroup) => {
  //       const password = group.controls[passwordKey];
  //       const confirmPassword = group.controls[confirmPasswordKey];

  //       if (!password.value || !confirmPassword.value) {
  //         return null;
  //       }
  //       if (password.value !== confirmPassword.value) {
  //         return {
  //           mismatchedPasswords: true
  //         };
  //       }
  //       return null;
  //     };

  submit() {
    const data = this.registerCustomerForm.getRawValue();
    this._adminService.customerAdd(data).then(
      (response: any) => {
        this.registerCustomerForm.reset()
        if (response && response.status == "OK") {
          this._utilityService.openMatSnackBar(
            response.message,
            response.status
          );
        } else {
          this._utilityService.openMatSnackBar(
            response.message,
            response.status
          );
        }
      },
      (error) => {
        this._utilityService.openMatSnackBar("Internal Server error", "ERROR");
      }
    );
  }
}
