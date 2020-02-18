import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { SearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  private _publicDate: number;

  @Input() itemCard: SearchItem;
  @Input()
  set publicDate(publicDate: number) {
    this._publicDate = new Date(publicDate).getTime();
  }
  get publicDate(): number {return this._publicDate};

  public today: number = +new Date();

  constructor (private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.iconRegistry.addSvgIcon(
        'viewed',
        this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/viewed.svg'));
    this.iconRegistry.addSvgIcon(
        'liked',
        this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/liked.svg'));
  }

  public ngOnInit(): void {
  }
}
