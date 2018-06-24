import { Component, OnInit } from '@angular/core';
import { CardService, CardData, CardDataMap, LaneData } from '../card-service/card.service';

@Component({
    selector: 'kanban-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.styles.css']
})

export class BoardComponent implements OnInit {

    cardData: LaneData[];

    constructor(private cardService: CardService) { }

    ngOnInit() { 
        this.cardData = this.cardService.getAllCardData();
    }
}
