import { Component, OnInit } from '@angular/core';
import { ShowApiService } from 'src/app/service/show-api.service';
import {FormControl,FormGroup} from '@angular/forms';
import { Title,Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 image: any;
 genres:any;
 schedule:any;

public getJsonValue: any;
public postJsonValue: any;
  constructor(private service: ShowApiService,private http:HttpClient , private title:Title,private meta:Meta) {
    this.title.setTitle('Search movies - showtime');
    this.meta.updateTag({name:'description',content:'search here movies like avatar,war etc'});
    
   }

  bannerResult: any = []

  actionMovieResult: any = []
  adventureMovieResult: any = []
  animationMovieResult: any = []
  comedyMovieResult: any = []
  documentaryMovieResult: any = []
  sciencefictionMovieResult: any = []
  thrillerMovieResult: any = []
  crimeMovieResult : any =[]
  romanceMovieResult : any =[]
  horrorMovieResult : any =[]
  fantacyMovieResult : any =[]
  familyMovieResult : any =[]

  ngOnInit(): void {
    this.bannerData();    
  }


 
bannerData(){
  this.service.bannerApiData().subscribe((result)=>{
    console.log(result)
    this.bannerResult = result.results;
   result.forEach((el: { genres: string | string[]; }) => {

    if(el.genres.includes("Science-Fiction")){
      this.sciencefictionMovieResult.push(el)
    }
    if(el.genres.includes("Action")){
      this.actionMovieResult.push(el)
    }
    if(el.genres.includes("Crime")){
      this.crimeMovieResult.push(el)
    }
    if(el.genres.includes("Thriller")){
      this.thrillerMovieResult.push(el)
    }
    if(el.genres.includes("Romance")){
      this.romanceMovieResult.push(el)
    }
    if(el.genres.includes("Horror")){
      this.horrorMovieResult.push(el)
    }
    if(el.genres.includes("Adventure")){
      this.adventureMovieResult.push(el)
    }
    if(el.genres.includes("Anime")){
      this.animationMovieResult.push(el)
    }
    if(el.genres.includes("Comedy")){
      this.comedyMovieResult.push(el)
    }
    if(el.genres.includes("Fantasy")){
      this.fantacyMovieResult.push(el)
    }
    if(el.genres.includes("Family")){
      this.familyMovieResult.push(el)
    }
  
   });
  });
}
handleNextPage(val:any){
  console.log(val)
}

}
