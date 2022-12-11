import {Injectable} from '@angular/core';
import {Product} from "./products";

@Injectable({
    providedIn: 'root'
})
export class CartService {

    items: Product[] = [];

    constructor() {
    }

    addToCart(product: Product) {
        if (this.items.find(item => item.id === product.id)) {
            window.alert(`${product.name} is already in your cart!`);
        } else {
            this.items.push(product);
            window.alert(`${product.name} has been added to your cart!`);
        }
    }

    getItems() {
        return this.items;
    }

    clearCart() {
        this.items = [];
        return this.items;
    }

    clearProductFromCart(id: number) {
        this.items = this.items.filter(item => item.id != id);
        return this.items;
    }
    totalPrice() {
        let total = 0;
        for (let item of this.items) {
            total += item.price;
        }
        return total;
    }
}