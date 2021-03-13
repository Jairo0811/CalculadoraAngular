import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  titulo = "Calculadora";
  operandoA: number;
  operandoB: number;
  resultado: number;
  year: number = new Date().getFullYear();

  
  onSumar(): void {
    this.resultado = this.operandoA + this.operandoB;
  }

  onRestar() {
    this.resultado = this.operandoA - this.operandoB;
  }

  onMultiplicar() {
    this.resultado = this.operandoA * this.operandoB;
  }

  onDividir() {
    this.resultado = this.operandoA / this.operandoB;
  }

  // onRaizCuadrada() {
  //   this.resultado = this.operandoA 	 √  this.operandoB;
  // }

  // onPorcentaje() {
  //   this.resultado = this.operandoA % this.operandoB;
  // }
}
