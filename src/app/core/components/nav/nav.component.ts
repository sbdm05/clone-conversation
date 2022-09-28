import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CanalService } from 'src/app/canal/canal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  form!: FormGroup;

  collection!: any;
  constructor(
    private canalService: CanalService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.canalService.collection.subscribe(data=>{
      //this.canalService.refreshCollection()
      //console.log(data)
      this.collection = data
      console.log(this.collection)
    })

    this.form = this.fb.group({
      canalName: ['nom du canal'],
      id: [],
    });
  }

  ngOnInit(): void {}

  addCanal() {
    console.log(this.form.value);
    this.canalService.postCanal(this.form.value).subscribe((data) => {
      console.log(data);
      this.form.reset();
    });
  }

  // getCanals() {
  //   this.canalService.refreshCollection().subscribe((data) => {
  //     console.log(data);

  //     this.collection = data;
  //   });
  // }

  goToCanal(item: any) {
    this.canalService.currentCanal.next(item.id);
    this.router.navigate(['canal', item.id])
  }
}
