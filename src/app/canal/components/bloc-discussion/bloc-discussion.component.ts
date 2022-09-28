import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloc-discussion',
  templateUrl: './bloc-discussion.component.html',
  styleUrls: ['./bloc-discussion.component.scss']
})
export class BlocDiscussionComponent implements OnInit {

  @Input() collection!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
