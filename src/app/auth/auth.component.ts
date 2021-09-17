import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

	loginForm: FormGroup;
	errorMessage: string; 
	isAuth : boolean;

	constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) { }

	ngOnInit() {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) this.router.navigate(['/admin/handle']);
		});
		this.initForm(); 
	}

	initForm() {
		this.loginForm = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
		});
	}

	onSubmit() {
		const email = this.loginForm.get('email').value;
		const pass = this.loginForm.get('password').value;
		this.authService.loginUser(email, pass).then(
			() => {
				this.router.navigate(['/admin/handle'])
			}, (error) => {
				firebase.auth().languageCode = "fr";
				this.errorMessage = error;
			}
		);
	}



	





}
