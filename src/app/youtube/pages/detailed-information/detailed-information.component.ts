import { Component, OnInit, Input  } from '@angular/core';

import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss']
})
export class DetailedInformationComponent implements OnInit {

  @Input() public id: string;

  constructor(private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id'];
}

  public ngOnInit(): void {
  }

}
