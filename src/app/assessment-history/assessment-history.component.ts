import { Component, OnInit, Input } from '@angular/core';

import { QualificationCommentType, Assessment } from '../interface';
import { QualityResultType } from '../constants';

@Component({
  selector: 'app-assessment-history',
  templateUrl: './assessment-history.component.html',
  styleUrls: ['./assessment-history.component.scss']
})
export class AssessmentHistoryComponent implements OnInit {
  readonly title = 'Assessment History';

  @Input() data: Assessment[];

  constructor() { }

  ngOnInit() {
  }

  getStateText(type: string) {
    return QualityResultType[type];
  }

}