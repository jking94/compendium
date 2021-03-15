import { BestiaryService } from './../../Services/bestiary.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beast-detail-page',
  templateUrl: './beast-detail-page.component.html',
  styleUrls: ['./beast-detail-page.component.scss']
})
export class BeastDetailPageComponent implements OnInit {

  public beast: any
  constructor(
    private activatedRoute: ActivatedRoute,
    private bestiaryService: BestiaryService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams
    .subscribe((params) => {
      this.bestiaryService.getBeastDetail(params.beasturl)
      .subscribe((beastData) => {
        this.beast = beastData;
      });
    });
  }

}
