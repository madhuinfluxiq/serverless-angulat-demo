import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Subscription } from 'rxjs/internal/Subscription';
import { debounceTime, switchMap, mergeMap, exhaustMap, concatMap } from 'rxjs/operators';
import { MyserviceService } from '../../module/service';
@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent implements OnInit {

  public qun: number = 0;
  doublequantity:number = 0;
  modelChanged = new Subject<any>();
  // modelChanged1 = new Subject<any>();
  subscriptions: Subscription[] = [];
  subscriptioncount = 0;

  constructor(public myservice: MyserviceService) {
    this.subscriptions[this.subscriptioncount++] = this.modelChanged
      .pipe(
        debounceTime(700),
        switchMap(data => this.myservice.getsquarevalue(this.qun))
        // concatMap(val => {
        //   // switchMap(val => {
        //   // mergeMap
        //   // exhaustMap
        //   // concatMap
        //   console.log(val, 'map');
        //   return this.myservice.getsquarevalue(this.quantity);
        // })
      )
      .subscribe((res) => {
        // this.searchResult$ = this.api.search(this.model);
        this.doublequantity = res;
        console.log(res, 'quantity in debounce block ');

      });
  }

  ngOnInit() {
  }
  inputchange() {
    // this.qun = this.qun + 1 ;
    console.log(this.qun, 'quantity');
    this.modelChanged.next();
    this.doublequantity = 0;
  }

}



  