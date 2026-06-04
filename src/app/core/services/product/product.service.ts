import { Injectable } from "@angular/core";
import { ApiService } from "../api/api.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PaginatedResponse } from "@core/models/shared/paginated-response.interface";
import { Product } from "@core/models/product/product.model";

@Injectable({ providedIn: 'root' }) 
export class ProductService extends ApiService {
    constructor(http: HttpClient) {
        super(http);
    }

    public getAll(): Observable<PaginatedResponse<Product>> {
        return this.get<PaginatedResponse<Product>>('products');
    }

    public getById(id: number): Observable<Product> {
        return this.get<Product>(`products/${id}`);
    }
}