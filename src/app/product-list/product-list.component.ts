import {Component} from '@angular/core';

import {products} from '../products';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    products = products;


    share(i: number) {
        window.alert(`${this.products[i].name} has been shared!`);
    }

    onNotify(i: number) {
        window.alert(`You will be notified when the ${this.products[i].name} goes on sale`);
    }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/