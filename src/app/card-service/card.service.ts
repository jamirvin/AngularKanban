import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoveEvent } from '../card/card.component';

export type CardData = {
    title: string
    description: string
    id: number
}

export type CardDataMap = { [lane: string]: CardData[] }

export type LaneData = { laneTitle: string, cards: CardData[] }

@Injectable({
    providedIn: 'root'
})
export class CardService {

    private data: LaneData[];

    private exampleData: LaneData[] = [ 
        {
            laneTitle: 'Todo',
            cards: 
            [{
                title: "Do Something", 
                description: "description",
                id: 1
            }, 
            {
                title: "Something", 
                description: "another description",
                id: 2
            }],
        },
        {
            laneTitle: 'In Progress',
            cards:
            [{
                title: "Started",
                description: "This is good",
                id: 3
            }]
        },
        {
            laneTitle: 'Review',
            cards: []
        },
        {
            laneTitle: 'Done',
            cards: []
        }
    ]
    
    constructor(private http: HttpClient) { 
        this.data = this.exampleData;
    }

    private removeCard(id: number) {
        for (let lane of this.data) {
            lane.cards = lane.cards.filter(card => card.id !== id);
        }
    }

    private addCard(lane: string, card: CardData) {
        this.getCardData(lane).push(card);
    }

    private getLaneIndex(id: number) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].cards.find(c => c.id === id))
                return i;
        }
    }

    moveCard(card: CardData, move: MoveEvent) {
        let laneIndex = this.getLaneIndex(card.id);
        this.removeCard(card.id);

        switch(move) {
            case 'left':
                this.data[laneIndex - 1].cards.push(card);
                break;
            case 'right':
                this.data[laneIndex + 1].cards.push(card);
                break;
        }
    }
    
    getAllCardData() {
        return this.data;
    }

    getCardData(laneTitle: string): CardData[] {
        return this.data.find(lane => lane.laneTitle === laneTitle).cards;
    }
}
