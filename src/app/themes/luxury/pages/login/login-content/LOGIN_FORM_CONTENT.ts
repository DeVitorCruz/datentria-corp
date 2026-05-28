import { ButtonItem } from "@shared/ui/button/button-item.interface";
import { FlexFormField, FlexFormItem } from "@shared/ui/flex-form/flex-form-item.interface";
import { SUBMIT_BUTTON } from "./SUBMIT_BUTTON";

export const LOGIN_FORM_CONTENT: FlexFormItem = {
    fields: [] as FlexFormField[],
    submitButton: SUBMIT_BUTTON as ButtonItem, 
    customClassName: ['login-form-content'] as string[],
} as FlexFormItem;