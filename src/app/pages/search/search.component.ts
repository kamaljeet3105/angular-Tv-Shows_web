import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ShowApiService } from 'src/app/service/show-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  constructor(private service:ShowApiService,private title:Title,private meta:Meta,private router:Router) {
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
      debugger
      this.service.getSearchShow(this.searchForm.value).subscribe((result)=>{
    console.log(result,'searchShow##');
         
          this.searchResult = result;
      });
  }

  handleNextPage(val:any): void{
    debugger
  
      // this.router.navigate(['/details/:id'], { queryParams: { genres: '', type: '' } });  
    // this.router.navigate(['/details'],{queryParams:val,skipLocationChange:true});
  
    this.router.navigate(['/details'],{queryParams:{image:val.image.original,rating:val.rating.average,name:val.name,description:val.summary},skipLocationChange:true});
  }
}
