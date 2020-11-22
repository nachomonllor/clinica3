  
import { Directive, Input, ElementRef, AfterViewInit} from '@angular/core';

@Directive({
  selector: '[cambiaColorEstado]'
})
export class CambiaColorEstado implements AfterViewInit {

  constructor(private elementRef:ElementRef) {
   }

   color:string;

   @Input() set cambiaColorEstado(status: string) {
      if(status == 'aceptado')
        this.color = 'orange'
      else if(status == 'atendido')
        this.color = 'green'
      else if(status == 'cancelado')
        this.color = 'red'
      else if(status == 'pendiente')
        this.color = 'grey'
    }

    ngAfterViewInit(): void {
      this.elementRef.nativeElement.style.backgroundColor = this.color;
      this.elementRef.nativeElement.style.color = 'white';
      this.elementRef.nativeElement.style.textTransform = 'uppercase';
      //this.elementRef.nativeElement.style.fontSize = '1.3em'
    }
}