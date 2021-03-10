import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpellsService } from 'src/app/Services/spells.service';

@Component({
  selector: 'app-spell-detail-page',
  templateUrl: './spell-detail-page.component.html',
  styleUrls: ['./spell-detail-page.component.scss']
})
export class SpellDetailPageComponent implements OnInit {

  public spell: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private spellsService: SpellsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams
    .subscribe((params) => {
      this.spellsService.getSpellDetail(params.spellurl)
      .subscribe((spellData) => {
        this.spell = spellData;
      });
    });
  }

}
