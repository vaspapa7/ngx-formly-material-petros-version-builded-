import { FieldType } from '@ngx-formly/material/form-field';
import { MatCheckbox } from '@angular/material/checkbox';
export declare class FormlyFieldCheckbox extends FieldType {
    checkbox: MatCheckbox;
    defaultOptions: {
        templateOptions: {
            hideFieldUnderline: boolean;
            indeterminate: boolean;
            floatLabel: string;
            hideLabel: boolean;
            align: string;
            color: string;
        };
    };
    onContainerClick(event: MouseEvent): void;
}