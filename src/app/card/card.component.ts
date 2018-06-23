
import { Component, OnInit, Input } from '@angular/core';
import { CardData } from '../card-service/card.service';

@Component({
	selector: 'kanban-card',
	templateUrl: 'card.component.html',
	styleUrls: ['card.styles.css']
	
})

export class CardComponent implements OnInit {

	@Input()
	cardData: CardData;

	isChanging = false;
	constructor() { }

	staticClick() {
		this.isChanging = true;
	}

	inputBlur() {
		this.isChanging = false;
	}

	ngOnInit() { }
}