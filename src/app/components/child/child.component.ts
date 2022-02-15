import {
  Component,
  Input,
  SimpleChanges,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  ViewChild,
  ContentChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit {
  @Input() userName = '';
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges triggered', changes);

    if(!changes['userName'].isFirstChange()) {
      if(changes['userName'].currentValue === 'Chris') {
        this.userName = 'Hello ' + this.userName;
      } else {
        this.userName = changes['userName'].previousValue;
      }
    }
  }

  ngOnInit() {
     console.log('ngOnInit from the child component');
  }

  ngDoCheck() {
    console.log('ngDoCheck triggered');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit - wrapper', this.wrapper);
    console.log('ngAfterContentInit - contentWrapper', this.content);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked triggered');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit - wrapper', this.wrapper);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked triggered');
  }
}
