import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-macchina',
  templateUrl: './macchina.component.html',
  styleUrls: ['./macchina.component.css']
})
export class MacchinaComponent implements OnInit {
  @Input() car: String;
  constructor() {
    
  }
  ngOnInit(): void {
    
  }
}
