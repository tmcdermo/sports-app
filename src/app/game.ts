import { Time } from '@angular/common';
export class Game {
    id: number;
    date: Date;
    time: Time;
    awayTeam: any = '';
    homeTeam: any = '';
    location: string;
}
