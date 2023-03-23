import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-refer-friend',
  templateUrl: './refer-friend.component.html',
  styleUrls: ['./refer-friend.component.scss']
})
export class ReferFriendComponent implements OnInit {
  ReferForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ReferForm = this.formBuilder.group({
      'email': ['', Validators.required]
    });
  }

}
