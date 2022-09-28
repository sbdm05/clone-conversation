import { Component, OnInit } from '@angular/core';

// décorateur
@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
})
export class UiComponent implements OnInit {
  public open: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  public onSubmit() {
    // permet d'envoyer un message dans la console
    // console.log('cliqué');

    // faire alterner open de true à false
    // ! NOT
    this.open = !this.open;
    console.log(this.open); // false à true et inversement
  }
} // ne rien écrire après cette ligne
