import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import {filter, map} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dropdown';

  // observable =  Observable.create((sub)=>{
  //   setTimeout(() => 
  //     sub.next("1")
  //   , 1000);
  //   setTimeout(() => 
  //     sub.next("2")
  //   , 2000);    setTimeout(() => 
  //     sub.error( new Error("Something went wrong with the application"))
  //   , 3000);    setTimeout(() => 
  //     sub.next("4")
  //   , 4000);    setTimeout(() => 
  //     sub.next("5")
  //   , 5000);
    

  // })
  // array = [1,2,3,4,5,6]
  // observable = of(this.array)
  array = [1,2,3,4,5,6]
  observable = from(this.array).pipe(map((val)=>{
return val * 5
  }), filter((val)=>{
    return val >= 12
  })
  
  )
  ngOnInit(){
    this.observable.subscribe((val)=>{
     console.log(val)
    })
  }
}
