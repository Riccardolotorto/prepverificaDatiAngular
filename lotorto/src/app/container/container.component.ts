import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit{
      cars: String[];
      constructor() {
        this.cars = ['fiat', 'ford', 'audi', 'mercedes', 'tesla', 'mazda', 'renault', 'citroen', 'ferrari', 'lamborghini'];
      }
      ngOnInit () {

      }
} 
