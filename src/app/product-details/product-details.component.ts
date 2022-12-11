import {Component, OnInit} from '@angular/core';
import {Product, products} from "../products";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product?: Product

  constructor(private route: ActivatedRoute,
              private CartService: CartService) {
  }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(params.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Product) {
    this.CartService.addToCart(product);
  }
}
