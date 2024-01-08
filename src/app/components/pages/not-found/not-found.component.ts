import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit{
  @Input()
  visible = false;
  @Input()
  notFoundMessage ="Nothing Found"

  @Input()
  restLinkText ="Reset"

  @Input()
  resetLinkRoute="/"

  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
