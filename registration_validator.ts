import { FormGroup } from '@angular/forms';

export class RegistrationValidator {
    static validate(registrationFormGroup: FormGroup) {
        console.log("registrationFormGroup: ", registrationFormGroup)
        let password = registrationFormGroup.controls.password.value;
        let repeatPassword = registrationFormGroup.controls.repeatPassword.value;

        if (repeatPassword.length <= 0) {
            return null;
        }
        if (repeatPassword !== password) {
            return {
                doesMatchPassword: true
            };
        }
        return null;
    }
}