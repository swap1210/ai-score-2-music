import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { MessagesService } from '../messages/messages.service';
import { AuthStore } from '../services/auth.store';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	form: FormGroup;

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private auth: AuthStore,
		private msg: MessagesService
	) {
		this.form = this.fb.group({
			email: ['user', [Validators.required]],
			password: ['password', [Validators.required]],
		});
	}

	ngOnInit() {}

	login() {
		const val = this.form.value;

		this.auth.login(val.email, val.password).subscribe(
			() => {
				this.router.navigateByUrl('/home');
			},
			(err) => {
				this.msg.showErrors('Login failed!');
			}
		);
	}
}
