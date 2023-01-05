import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { ShowApiService } from 'src/app/service/show-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  constructor(private service:ShowApiService,private title:Title,private meta:Meta) {
    this.title.setTitle('Search show - showtime');
    this.meta.updateTag({name:'description',content:'search here show like avatar,war etc'});
   }

  ngOnInit(): void {
  }

  searchResult:any;
  searchForm = new FormGroup({
    'movieName':new FormControl(null)
  });

  submitForm()
  {
      console.log(this.searchForm.value,'searchform#');
      this.service.getSearchShow(this.searchForm.value).subscribe((result)=>{
    console.log(result,'searchShow##');
         
          this.searchResult = result.results;
      });
  }

}
