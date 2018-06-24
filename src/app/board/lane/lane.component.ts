import { Component, OnInit, Input } from '@angular/core';
import { CardData, CardService } from '../../card-service/card.service';
import { MoveEvent } from '../../card/card.component';

@Component({
	selector: 'kanban-lane',
	templateUrl: './lane.component.html',
	styleUrls: ['./lane.styles.css']
})

export class LaneComponent implements OnInit {

	@Input()
	title: string;

	@Input()
	cards: CardData[]

	constructor(private cardService: CardService) { }

	handleMove(card: CardData, move: MoveEvent) {
		this.cardService.moveCard(card, move);
	}

	ngOnInit() { }
}