import { AfterViewChecked, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    console.log(this.minhaDiv);
    this.minhaDiv!.nativeElement.style.backgroundColor = 'gray';
    this.meuSubcomponente!.nativeElement.style.color = 'blue';
  }
  @ViewChild('minhaDiv') minhaDiv?: ElementRef;
  @ViewChild('meuSubcomponente') meuSubcomponente?: ElementRef;
  title = 'aula_13_view_child';
}
