import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CrisisService } from '../crisis.service';
import { Crisis } from 'app/crisis-center/crisis';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {
  selectedId: number;
  crises: Crisis[];

  constructor(
    private crisesService: CrisisService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCrises();
  }

  getCrises(): void {
    this.crisesService.getCrises().then(crises => this.crises = crises);
  }

  onSelect(crisis: Crisis) {
    this.selectedId = crisis.id;

    // Navigate with relative link
    this.router.navigate([crisis.id], { relativeTo: this.route });
  }

}
