import { Component, OnInit } from '@angular/core';
import { SpellsService } from 'src/app/Services/spells.service';

@Component({
  selector: 'app-spells-page',
  templateUrl: './spells-page.component.html',
  styleUrls: ['./spells-page.component.scss']
})
export class SpellsPageComponent implements OnInit {
  public allSpells: any[] = [];

  constructor(
    private spellsService: SpellsService
  ) { }

  ngOnInit(): void {
    this.spellsService.getSpells()
    .subscribe((data) => {
      this.allSpells = data.results;
      console.log(this.allSpells);
    });
  }

}
