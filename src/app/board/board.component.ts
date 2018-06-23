import { Component, OnInit } from '@angular/core';
import { CardService, CardData, CardDataMap } from '../card-service/card.service';

@Component({
    selector: 'kanban-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.styles.css']
})

export class BoardComponent implements OnInit {

    lanes = ['Todo', 'In Progress', 'Review', 'Complete']

    cardData: CardDataMap;

    constructor(private cardService: CardService) { }

    ngOnInit() { 
        this.cardData = this.cardService.getAllCardData();
    }
}
