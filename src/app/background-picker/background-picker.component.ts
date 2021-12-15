import { Component, Directive, Input } from '@angular/core';

@Component({
	selector: '[color]',
	templateUrl: './background-picker.component.html',
	styleUrls: ['./background-picker.component.less']
})
export class BackgroundPickerComponent {
	@Input() color: string;
	colors = [
		{
			title: "White",
			value: "white"
		},
		{
			title: "Red",
			value: "red"
		},
		{
			title: "Orange",
			value: "orange"
		},
		{
			title: "Yellow",
			value: "yellow"
		},
		{
			title: "Green",
			value: "green"
		},
		{
			title: "Cyan",
			value: "cyan"
		},
		{
			title: "Blue",
			value: "blue"
		},
		{
			title: "Purple",
			value: "purple"
		},
	];

	setBackground(color: string) {
		this.color = color;
		document.getElementById('background-picker')?.setAttribute('style', 'background-color:' + this.color);
	}
}
