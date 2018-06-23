import { Component, OnInit, Input } from '@angular/core';
import { CardData } from '../../card-service/card.service';

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

	constructor() { }

	ngOnInit() { }
}