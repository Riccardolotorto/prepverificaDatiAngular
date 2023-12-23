import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-macchina',
  templateUrl: './macchina.component.html',
  styleUrls: ['./macchina.component.css']
})
export class MacchinaComponent implements OnInit {
  @Input() car: String;
  pezzi: String[];
  constructor() {
    this.pezzi = ['bulloni', 'viti', 'ferro'];
  }
  ngOnInit(): void {
    
  }
}
