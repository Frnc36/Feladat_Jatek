// Jatekter osztály
class Jatekter {
    constructor(szelesseg, magassag) {
        this.meret = {
            szelesseg: szelesseg,
            magassag: magassag
        };
        this.jatekos = null;   // kezdetben nincs játékos példányosítva
        this.info = null;      // kezdetben nincs info példány
    }

    // Metódus a játékos létrehozására és eltárolására
    letrehozzaJatekost(nev, elet, pont, hatizsak, helyzetX, helyzetY, kep) {
        this.jatekos = new Jatekos(nev, elet, pont, hatizsak, helyzetX, helyzetY, kep);
        // A játékos létrehozása után automatikusan létrehozzuk az Info objektumot is
        this.info = new Info(this.jatekos);
    }

    // A játékos pontjainak növelése (segédfüggvény a bemutatóhoz)
    novelPontot(ertek) {
        if (this.jatekos) {
            this.jatekos.pont += ertek;
        }
    }
}