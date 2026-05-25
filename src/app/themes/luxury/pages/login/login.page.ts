import { NgClass } from "@angular/common";
import { Component, inject, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { LoginRequest } from "@core/models/auth/auth-response.model";
import { AuthService } from "@core/services/auth/auth.service";


@Component({
    selector: "app-login",
    imports: [FormsModule, RouterLink, NgClass],
    templateUrl: "./login.page.html",
    styleUrl: "./login.page.scss"
}) export class LoginPage {
    private readonly AUTH = inject(AuthService);
    private readonly ROUTER = inject(Router);

    public readonly CREDENTIALS: LoginRequest = {
        email: '',
        password: '',
    };

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