import { Component } from '@angular/core';
import productsData from '../assets/products.json';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})
export class AppComponent {
	rainbowTitle = false;
	defaultBackground = 'white';
	showProducts = false;
	products = productsData.products;

	toggleProducts() {
		this.showProducts = !this.showProducts;
		console.log('Show products:', this.showProducts);
	}

	addProduct() {
		let name = (<HTMLInputElement>document.getElementById('add-name')).value;
		let description = (<HTMLInputElement>document.getElementById('add-description')).value;
		console.log('Added:', name, description);
		this.products.push({name: name, description: description});
	}

	removeProduct(i: number) {
		console.log('Removed id:', i);
		this.products.splice(i, 1);
	}

	toggleRainbowTitle() {
		this.rainbowTitle = !this.rainbowTitle;
	}
}
