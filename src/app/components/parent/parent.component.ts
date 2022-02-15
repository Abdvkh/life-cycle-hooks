import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  userName = 'Maria';
  isChildDestroyed = false;

  ngOnInit() {
    console.log('ngOnInit from the parent component');
  }

  updateUser() {
    this.userName = 'Chris';
  }

  destroy() {
    this.isChildDestroyed = true;
  }
}
