import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanalService } from '../../canal.service';

@Component({
  selector: 'app-page-list-posts',
  templateUrl: './page-list-posts.component.html',
  styleUrls: ['./page-list-posts.component.scss'],
})
export class PageListPostsComponent implements OnInit {
  collection$!: Observable<any>;
  currentCanalId!: number;
  canal!: any;
  constructor(private canalService: CanalService, private activatedRoute: ActivatedRoute, private router: Router) {
    //this.collection$ = this.canalService.getCollection();
    let id: number;

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      id = Number(paramMap.get('id'));
      console.log(id);
      this.canalService.getCanalById(id).subscribe((canal) => {
        console.log(canal, 'canal');
        this.canal = canal
      });
    });
  }

  ngOnInit(): void {}

  ngOnChanges() {
    console.log('test');
  }

  sendValue(obj: any) {
    console.log(obj);
    // call service
    this.canalService.postMessage(this.canal, obj).subscribe((data) => {
      console.log(data, 'depuis send value');
      this.canal = data;
    });
  }

  onDelete(){
    console.log(this.canal)
    this.canalService.deleteCanal(this.canal).subscribe((data)=>{
      console.log(data, 'inside ondelete')
      this.canal = '';
      this.router.navigate([''])
    })
  }
}
