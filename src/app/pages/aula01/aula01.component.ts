import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-aula01',
  templateUrl: './aula01.component.html',
  styleUrls: ['./aula01.component.scss']
})
export class Aula01Component implements AfterViewInit {

  // Dou nome ao nosso marcador e informo se ele é estático
  // Após pegar o elemento, temos que atribuir ele a alguma variável
  @ViewChild('box', {static: true})
  box!: ElementRef<HTMLDivElement>

  // Essa função é chamada após a inicialização do componente.
  // Já que para a animação funcionar, o elemento precisa ter inicializado
  // Utilizamos o "nativeElement" pois ele sim é o elemento que está na variável
  ngAfterViewInit(): void {
    gsap.to(this.box.nativeElement, { rotation: 27, x: 100, duration: 5})
  }

}
