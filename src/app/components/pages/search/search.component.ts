import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
search(arg0: string) {
throw new Error('Method not implemented.');
}


  searchTerm=''
  constructor(ActivatedRoute:ActivatedRoute, private router:Router){
    ActivatedRoute.params.subscribe((params)={
      if(params.searchTerm)
      this.searchTerm = params.searchTerm;
    });

  }

  ngOnInit(): void{

  }
  Search(term:string){
    if(term)
    this.router.navigateByUrl('/search/'+term);
  }

}
