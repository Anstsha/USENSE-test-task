import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordStrengthValidator(): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {

		const value = control.value;
		// the issue can be solved with the following regexes but this code is less readeable

		// const regexEasy = /^[a-zA-Z]{8,}$|\d{8,}$|[^a-zA-Z\d\s]{8,}$/g;
		// const regexMedium = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z\s\d])([^\d\s]{8,})$|^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{8,})$|^(?=.*[0-9])(?=.*[^a-zA-Z\s\d])([^a-zA-Z\s]{8,})$/g;
		// const regexStrong = /^(?=.*[a-zA-Z])(?=.*[\d])(?=.*[^\w\s]).{8,}$/g;

		// const easy = value?.match(regexEasy);
		// const medium = value?.match(regexMedium);
		// const strong = value?.match(regexStrong);

		const letterRegex = /[a-zA-Z]+/g;
		const digitRegex = /\d+/g;
		const symbolRegex = /[^a-zA-Z\s\d]+/g;

		const easy = value.match(letterRegex) || value.match(digitRegex) || value.match(symbolRegex);
		const medium = value.match(letterRegex) && value.match(digitRegex)
			|| value.match(letterRegex) && value.match(symbolRegex)
			|| value.match(symbolRegex) && value.match(digitRegex);
		const strong = value.match(letterRegex) && value.match(digitRegex) && value.match(symbolRegex);

		if (!control || !value) {
			return null;
		}
		if (strong) {
			return { strong: true };
		}
		if (medium) {
			return { medium: true };
		}
		if (easy) {
			return { easy: true };
		}
		return null;
	};
}