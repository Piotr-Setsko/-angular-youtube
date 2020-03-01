import { Component, OnInit, Input  } from '@angular/core';
import { SearchItem }  from '../../models/search-item.model';
import {Location} from '@angular/common';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { response } from '../../response';

import {  Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss']
})
export class DetailedInformationComponent implements OnInit {

  @Input() public id: string;
  public items: SearchItem[] = response.items;
  public item: SearchItem;

  constructor(private activateRoute: ActivatedRoute, private router: Router,
              private _location: Location, private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer) {
    this.iconRegistry.addSvgIcon(
      'viewed',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/viewed.svg'));
    this.iconRegistry.addSvgIcon(
      'liked',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/liked.svg'));
    this.iconRegistry.addSvgIcon(
      'dislike',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/dislike.svg'));
    this.iconRegistry.addSvgIcon(
      'comments',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/comments.svg'));
  }

  public ngOnInit(): void {
    this.items.forEach((itemLink: SearchItem) => {
      if (itemLink.id === this.activateRoute.snapshot.params.id) {
        this.item = itemLink;
      }
    });
  }

  public goBack(): void {
    this._location.back();
  }
}
