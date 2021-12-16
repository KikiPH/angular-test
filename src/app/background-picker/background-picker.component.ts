import { Component, Input } from '@angular/core';
import colorsData from '../../assets/colors.json';

@Component({
	selector: '[color]',
	templateUrl: './background-picker.component.html',
	styleUrls: ['./background-picker.component.less']
})
export class BackgroundPickerComponent {
	@Input() color: string;
	colors = colorsData.colors;

	setBackground(color: string) {
		this.color = color;
		document.getElementById('background-picker')?.setAttribute('style', 'background-color:' + this.color);
	}
}
