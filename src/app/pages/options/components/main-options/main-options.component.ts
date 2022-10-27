import { Component, OnInit } from '@angular/core';
import { OptionsService } from 'src/app/core/services/options.service';

@Component({
  selector: 'app-main-options',
  templateUrl: './main-options.component.html',
  styleUrls: ['./main-options.component.scss']
})
export class MainOptionsComponent implements OnInit {

  userLoguer: boolean = false;

  constructor(private serviceoption: OptionsService) { }

  ngOnInit(): void {
    if(localStorage.getItem('userlog')){
      this.userLoguer = true;
    }
  }

  setIdOption(id:string){
    this.serviceoption.setOption(id);
  }

}
