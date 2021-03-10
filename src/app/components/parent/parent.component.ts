import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { GreetingDataManager } from "../../data-managers/greeting.data-manager";
import { Greeting } from "../../store/reducers/greeting.reducer";

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
})
export class ParentComponent implements OnInit{

  public greetingForm = new FormControl('');
  private countId = -1;
  private greeting: Greeting;
  public allGreetings: Greeting[];

  constructor(
    private greetingDataManager: GreetingDataManager,
  ) {}

  ngOnInit() {
  }

  removeGreeting(id: number) {

  }

  setGreeting() {
    if (this.greetingForm.value === '') { return; }
    this.countId += 1;

    this.greeting = {
     id: this.countId,
     word: this.greetingForm.value,
     time: Date.now(),
    };
  }
}
