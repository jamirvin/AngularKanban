import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type CardData = {
    title: string
    description: string
}

export type CardDataMap = { [lane: string]: CardData[] }

@Injectable({
    providedIn: 'root'
})
export class CardService {

    private data: CardDataMap;

    private exampleData: CardDataMap = { 
        'Todo': 
            [{
                title: "Do Something", 
                description: "description"
            }, 
            {
                title: "Something", 
                description: "another description"
            }],
        'In Progress':
            [{
                title: "Started",
                description: "This is good"
            }]
    }
    
    constructor(private http: HttpClient) { 
        this.data = this.exampleData;
    }
    
    getAllCardData() {
        return this.data;
    }

    getCardData(lane: string): CardData[] {
        return this.data[lane];
    }
}
