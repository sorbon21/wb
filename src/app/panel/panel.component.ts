import {Component, Input, OnInit} from '@angular/core';
import {ButtonsService} from "../buttons.service";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input() id: number;

  constructor(private btnService:ButtonsService) {

  }

  ngOnInit(): void {


  }
  getPages():any{
    return this.btnService.getByPage(this.id)
  }

}
