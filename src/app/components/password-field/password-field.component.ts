import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { passwordStrengthValidator } from 'src/app/validators/password-validator';

@Component({
	selector: 'app-password-field',
	templateUrl: './password-field.component.html',
	styleUrls: ['./password-field.component.scss']
})
export class PasswordFieldComponent implements OnInit {
	passwordField = new FormControl('');

	ngOnInit() {
		this.passwordField.setValidators([Validators.minLength(8), passwordStrengthValidator()]);
	}

	setColorFirstSection(): string {
		if (this.passwordField.hasError('minlength') || this.passwordField.hasError('easy')) {
			return 'red';
		}
		if (this.passwordField.hasError('medium')) {
			return 'yellow';
		}
		if (this.passwordField.hasError('strong')) {
			return 'green';
		}
		return 'gray';
	}

	setColorMiddleSection(): string {
		if (this.passwordField.hasError('minlength')) {
			return 'red';
		}
		if (this.passwordField.hasError('medium')) {
			return 'yellow';
		}
		if (this.passwordField.hasError('strong')) {
			return 'green';
		}
		return 'gray';
	}

	setColorLastSection(): string {
		if (this.passwordField.hasError('minlength')) {
			return 'red';
		}
		if (this.passwordField.hasError('strong')) {
			return 'green';
		}
		return 'gray';
	}

}
