import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit{
  macchine : string[];
  constructor() {
    this.macchine = ['ford', 'ferrari', 'porche', 'lamborghini', 'mazda', 'tesla'];
  }
  ngOnInit(): void {
    
  }
}
