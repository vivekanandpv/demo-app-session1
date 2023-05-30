import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AsyncSubject,
  BehaviorSubject,
  ReplaySubject,
  Subject,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit, OnDestroy {
  subject = new AsyncSubject<number>();
  subscription?: Subscription;

  ngOnInit(): void {
    this.subscription = this.subject.subscribe({
      next: (n) => console.log('subscriber1', n),
      error: (e) => console.log('error1', e.message),
      complete: () => console.log('completed1'),
    });

    this.subject.next(14);
    this.subject.next(2);
    this.subject.next(-8);
    this.subject.next(99);

    this.subject.subscribe({
      next: (n) => console.log('subscriber2', n),
      error: (e) => console.log('error2', e.message),
      complete: () => console.log('completed2'),
    });

    this.subject.next(100);

    this.subject.complete();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
