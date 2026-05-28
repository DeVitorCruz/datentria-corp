import { Component, inject, signal } from "@angular/core";
import { Router } from "@angular/router";
import { LoginRequest } from "@core/models/auth/auth-response.model";
import { AuthService } from "@core/services/auth/auth.service";
import { LOGIN_HEADER_CONTENT } from "./login-content/LOGIN_HEADER_CONTENT";
import { LOGIN_FOOTER_CONTENT } from "./login-content/LOGIN_FOOTER_CONTENT";
import { FlexFormField, FlexFormItem } from "@shared/ui/flex-form/flex-form-item.interface";
import { SUBMIT_BUTTON } from "./login-content/SUBMIT_BUTTON";
import { ButtonItem } from "@shared/ui/button/button-item.interface";
import { AuthFormContent } from "@ui-building/auth-form/auth-form.interface";
import { FlexInputItem } from "@core/models/share-info/flex-input-item.interface";
import { AuthFormComponent } from "@ui-building/auth-form/auth-form.component";


@Component({
    selector: "app-login",
    imports: [
        AuthFormComponent
    ],
    templateUrl: "./login.page.html"
}) export class LoginPage {
    private readonly AUTH = inject(AuthService);
    private readonly ROUTER = inject(Router);

    public readonly CREDENTIALS: LoginRequest = {
        email: '',
        password: '',
    };

    public readonly LOGIN_CONTENT: AuthFormContent = {
        headerContent: LOGIN_HEADER_CONTENT,
        formContent: {
            fields: [
                {
                    id: 0,
                    inputItem: {
                        value: '',
                        placeholder: 'your@email.com',
                        customClassName: ['flex-email-field'] as string[],
                        label: 'Email',
                        isDisabled: false,
                        type: 'email',
                        name: 'email',
                        required: true,
                    } as FlexInputItem,
                    customFieldClassName: '',
                    onValueChange: (value: string) => this.CREDENTIALS.email = value 
                } as FlexFormField,
                {
                    id: 1,
                    inputItem: {
                        value: '',
                        placeholder: '••••••••',
                        customClassName: ['flex-password-field'] as string[],
                        label: 'Password',
                        isDisabled: false,
                        type: 'password',
                        name: 'password',
                        required: true,
                    } as FlexInputItem,
                    customFieldClassName: '',
                    onValueChange: (value: string) => this.CREDENTIALS.password = value 
                } as FlexFormField,
            ] as FlexFormField[],
            submitButton: SUBMIT_BUTTON as ButtonItem, 
            customClassName: ['login-form-content'] as string[],
        } as FlexFormItem,
        footerContent: LOGIN_FOOTER_CONTENT,
    }

    public readonly LOADING = signal<boolean>(false);
    public readonly ERROR = signal<string | null>(null);

    public onSubmit(): void {
        this.LOADING.set(true);
        this.ERROR.set(null);

        this.AUTH.login(this.CREDENTIALS).subscribe({
            next: () => {
                this.LOADING.set(false);
                this.ROUTER.navigate(['/home']);
            },
            error: (err) => {
                this.LOADING.set(false);
                this.ERROR.set(err.error?.message ?? "Login failed. Please try again.");
            }
        });
    }
}