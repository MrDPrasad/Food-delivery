import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit{
[x: string]: any;

  constructor(){}

  @Input()
  title!:string;

  @Input()
  margin?='1rem 0 1rem 0.25rem';

  @Input()
  fontSize?:'1.7rem';

  ngOnInit(): void {

  }

}
