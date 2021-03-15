import { BestiaryService } from './../../Services/bestiary.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bestiary-page',
  templateUrl: './bestiary-page.component.html',
  styleUrls: ['./bestiary-page.component.scss']
})
export class BestiaryPageComponent implements OnInit {
  public allBeasts: any[] = [];
  public selectedBeast: any;

  constructor(
    private bestiaryService: BestiaryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.bestiaryService.getBeasts()
    .subscribe((allBeasts) => {
      this.allBeasts = allBeasts.results;
    });
  }

  selectBeast(beast: any) {
    this.router.navigate([`/beast-detail`], { queryParams: {beasturl: beast.url } });
  }


}
