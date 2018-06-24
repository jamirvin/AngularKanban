
import { EventEmitter, Component, OnInit, Input, Output } from '@angular/core';
import { CardData } from '../card-service/card.service';

export type MoveEvent = 'left' | 'right';

@Component({
	selector: 'kanban-card',
	templateUrl: 'card.component.html',
	styleUrls: ['card.styles.css']
	
})

export class CardComponent implements OnInit {

	@Input()
	cardData: CardData;

	@Output()
	moveCard = new EventEmitter<MoveEvent>();

	isChanging = false;
	constructor() { }

	staticClick() {
		this.isChanging = true;
	}

	inputBlur() {
		this.isChanging = false;
	}

	moveLeft(event: MouseEvent) {
		this.moveCard.emit('left')
	}

	moveRight(event: MouseEvent) {
		this.moveCard.emit('right')
	}

	ngOnInit() { }
}