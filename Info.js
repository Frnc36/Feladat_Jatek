export default class Info {
    constructor(jatekos) {
        this.jatekos = jatekos;     // referencia a játékos objektumra
    }

    // Visszaadja a játékos nevét és pontjait szöveges formában
    getAllapotSzoveg() {
        return `Játékos: ${this.jatekos.nev} | Pont: ${this.jatekos.pont}`;
    }

    // Kiírja a konzolra a játékos állapotát
    megjelenitKonzolon() {
        console.log(this.getAllapotSzoveg());
    }

    // Visszaadja HTML formátumban (ha később weboldalon szeretnéd megjeleníteni)
    getHtmlSzoveg() {
        return `
            <div class="info-panel">
                <strong>👤 ${this.jatekos.nev}</strong><br>
                ⭐ Pont: ${this.jatekos.pont}
            </div>
        `;
    }
}