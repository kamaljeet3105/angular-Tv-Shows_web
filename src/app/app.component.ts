import { Component ,HostListener} from '@angular/core';
import { ShowApiService } from './service/show-api.service';
import {FormControl,FormGroup} from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  navbar:any;

  constructor(private service: ShowApiService,private title:Title,private meta:Meta) {
    this.title.setTitle('Search movies - showtime');
    this.meta.updateTag({name:'description',content:'search here movies like avatar,war etc'});
    
   }

  
  @HostListener('document:scroll') scrollover(){
    console.log(document.body.scrollTop,'scrolllength#');
    
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    {
      this.navbar = {
        'background-color':'#3f3f3f'
      }
    }else
    {
        this.navbar = {}
    }
  }
}

