import {Component, Input} from '@angular/core';
import {CartService} from "../cart.service";
import {Product} from "../products";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent {


    items = this.cartService.getItems();

    constructor(private cartService: CartService) {
    }


    clearCart() {
        this.cartService.clearCart();
        this.items = this.cartService.getItems();
    }

    clearProductFromCart(id: number) {
        this.cartService.clearProductFromCart(id);
        this.items = this.cartService.getItems();
    }

    buyCart() {
        this.cartService.clearCart();
        this.items = this.cartService.getItems();
        window.alert(`Thank you for your purchase! `);
    }

    totalPrice() {
        return this.cartService.totalPrice();
    }
}


