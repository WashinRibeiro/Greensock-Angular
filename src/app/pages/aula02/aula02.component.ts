import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-aula02',
  templateUrl: './aula02.component.html',
  styleUrls: ['./aula02.component.scss'],
})
export class Aula02Component implements AfterViewInit {

  // O viewChild pega somente o primeiro marcador, então utilizamos o viewChildren, que assim ele pegará todos que possuíram o marcador
  // Para trabalhar com uma lista de marcadores do mesmo tipo, utilizamos ao invés de "ElementRef<HTMLDivElement>" o "QueryList<ElementRef>"
  @ViewChildren('box')
  box!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    console.log(this.box);

    // ? Para trabalhar com um item de um marcador
    // gsap.to(this.box.nativeElement, { rotation: 27, x: 100, duration: 5})

    // ? Para trabalhar com mais de um item de um marcador
    this.box.forEach((boxDiv: ElementRef<HTMLDivElement>) => {
      gsap.to(boxDiv.nativeElement, { rotation: 27, x: 200, duration: 5, delay: 0.5, ease: 'elastic' })
    });
  }
}
