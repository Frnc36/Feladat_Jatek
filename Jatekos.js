export default class Jatekos {
    constructor(nev, elet, pont, hatizsak, helyzetX, helyzetY, kep) {
        this.nev = nev;             // string - a játékos neve
        this.elet = elet;           // szám (pl. 100)
        this.pont = pont;           // szám (pl. 0)
        this.hatizsak = hatizsak;   // tömb (pl. ['kard', 'pajzs'])
        this.helyzet = {             // objektum x és y koordinátákkal
            x: helyzetX,
            y: helyzetY
        };
        this.kep = kep;             // string (pl. "kepek/jatekos.png")
    }
}