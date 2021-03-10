import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpellsService } from 'src/app/Services/spells.service';

@Component({
  selector: 'app-spells-page',
  templateUrl: './spells-page.component.html',
  styleUrls: ['./spells-page.component.scss']
})
export class SpellsPageComponent implements OnInit {
  public allSpells: any[] = [];
  public selectedSpell: any;

  constructor(
    private spellsService: SpellsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.spellsService.getSpells()
    .subscribe((allSpells) => {
      this.allSpells = allSpells.results;
    });
  }

  selectSpell(spell: any) {
    this.router.navigate([`/spell-detail`], { queryParams: { spellurl: spell.url } });
  }

}
