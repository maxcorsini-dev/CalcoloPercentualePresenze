import { Component } from '@angular/core';

@Component({
  selector: 'app-calcolatore-presenze',
  templateUrl: './calcolatore-presenze.component.html',
  styleUrls: ['./calcolatore-presenze.component.css']
})
export class CalcolatorePresenzeComponent {
  oreLezione: number = 0;
  assenze: number = 0; // Inizializza assenze a 0
  presenze: number = 0; // Inizializza presenze a 0
  percentualePresenze: string | null = null;
  percentualeAssenze: string | null = null;

  calcolaPercentuali() {
    if (this.oreLezione > 0) {
      this.percentualePresenze = ((this.presenze / this.oreLezione) * 100).toFixed(2); // Arrotonda a 2 decimali
      this.percentualeAssenze = ((this.assenze / this.oreLezione) * 100).toFixed(2); // Arrotonda a 2 decimali
    } else {
      this.percentualePresenze = null;
      this.percentualeAssenze = null;
    }
  }
}
