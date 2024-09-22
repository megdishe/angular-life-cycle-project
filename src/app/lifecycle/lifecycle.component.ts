import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent
  implements OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() text?: string;

  // should not be used for complex initialization prefer ngOnInit
  constructor() {
    console.log('CONSTRUCTOR');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
  }

  // not useful because it will run a lot do not use it only if you have a solid reason
  ngDoCheck() {
    console.log('ngDoCheck');
  }

  // related to ngContent projection <ngContent/> after initialization
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  // related to ngContent projection ...
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  // after the template was initialized
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  // after the template was checked
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
