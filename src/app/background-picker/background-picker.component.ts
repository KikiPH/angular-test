import { Component, Directive, Input } from '@angular/core';

@Component({
	selector: '[color]',
	templateUrl: './background-picker.component.html',
	styleUrls: ['./background-picker.component.less']
})
export class BackgroundPickerComponent {
	@Input() color: string;

	setBackground(color: string) {
		this.color = color;
		document.getElementById('background-picker')?.setAttribute('style', 'background-color:' + this.color);
	}
}
