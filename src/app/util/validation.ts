import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, ValidationErrors } from "@angular/forms";
import { NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService } from "@nebular/theme";

@Injectable({
    providedIn: 'root'
  })
export class Validation {
    statusToastPrimary: NbComponentStatus = 'primary';
    statusToastWarning: NbComponentStatus = 'warning';

    constructor(
        private toastrService: NbToastrService
    ) { }

    getFormValidationInvalid(form: FormGroup) {
        var countToast = 0;
        Object.keys(form.controls).forEach(key => {
            const controlErrors: ValidationErrors = form.get(key).errors;
            if (controlErrors != null) {
                Object.keys(controlErrors).forEach(keyError => {
                    const values = Object.keys(controlErrors[keyError]).map(key => key + ' ' + controlErrors[keyError][key]);
                    const commaJoinedValues = values.join(", ");
                    countToast+=1
                    this.showToastInvalidForm(countToast, 'Field: ' + key + ', invalid ' + keyError.toString() + ', ' + commaJoinedValues);
                });
            }
        });
    }

    showToastInvalidForm(countContent: number, body: string) {
        const config = {
            status: this.statusToastPrimary,
            destroyByClick: true,
            duration: 5000,
            hasIcon: true,
            position: NbGlobalPhysicalPosition.TOP_RIGHT,
            limit: 5
        };

        this.toastrService.show(
            body,
            `Info ${countContent}`,
            config);
    }

    showToastSuccess(body: string) {
        const config = {
            status: this.statusToastWarning,
            destroyByClick: true,
            duration: 5000,
            hasIcon: true,
            position: NbGlobalPhysicalPosition.TOP_RIGHT,
            limit: 5
        };

        this.toastrService.show(
            body,
            `Info Success`,
            config);
    }

    showToastFailed(body: string) {
        const config = {
            status: this.statusToastPrimary,
            destroyByClick: true,
            duration: 5000,
            hasIcon: true,
            position: NbGlobalPhysicalPosition.TOP_RIGHT,
            limit: 5
        };

        this.toastrService.show(
            body,
            `Info Failed`,
            config);
    }

}
