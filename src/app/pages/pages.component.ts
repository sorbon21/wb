import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  public Id: number;
  constructor(private _route: ActivatedRoute, private  route_to: Router,private titleService: Title) {

  }


  ngOnInit(): void {
    this._route.paramMap.subscribe((params: ParamMap) =>  {
      this.Id = Number(params.get('id'));
      this.titleService.setTitle(`Страница № ${this.Id}`);
      if (!(this.Id>=1&&this.Id<=5))
      {
        this.route_to.navigate(['/404']);
      }

    });

  }

}
