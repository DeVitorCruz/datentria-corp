import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthService } from "@core/services/auth/auth.service";

export const AUTH_INTERCEPTOR: HttpInterceptorFn = (req, next) => {
    const AUTH = inject(AuthService);
    const TOKEN = AUTH.getToken();

    if (TOKEN) {
        const AUTH_REQ = req.clone({
            setHeaders: {
                Authorization: `Bearer ${TOKEN}`
            }
        });
        return next(AUTH_REQ);
    }

    return next(req);
};