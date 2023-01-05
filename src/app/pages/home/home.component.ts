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

  bannerResult: any = [];
  showsResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  ngOnInit(): void {
    this.image=this.bannerResult.image;
    this.genres=this.bannerResult.genres;
    this.schedule=this.bannerResult.schedule;

   
    this.bannerData();
    this.showsData();
    // this.actionMovie();
    // this.adventureMovie();
    // this.comedyMovie();
    // this.animationMovie();
    // this.documentaryMovie();
    // this.sciencefictionMovie();
    // this.thrillerMovie();
    
  }


 
bannerData(){
  this.service.bannerApiData().subscribe((result)=>{
console.log(result, 'bannerResult');
this.bannerResult = result.results;
  });
}
  showsData() {
    this.service.showsApiData().subscribe((result) => {
      console.log(result, 'showsresult#');
      this.showsResult = result.results;
      this.showsResult
    });
  }

  // action 
  // actionMovie() {
  //   this.service.fetchActionMovies().subscribe((result) => {
  //     this.actionMovieResult = result.results;
  //   });
  // }




  // adventure 
  // adventureMovie() {
  //   this.service.fetchAdventureMovies().subscribe((result) => {
  //     this.adventureMovieResult = result.results;
  //   });
  // }


  // animation 
  // animationMovie() {
  //   this.service.fetchAnimationMovies().subscribe((result) => {
  //     this.animationMovieResult = result.results;
  //   });
  // }


  // comedy 
  // comedyMovie() {
  //   this.service.fetchComedyMovies().subscribe((result) => {
  //     this.comedyMovieResult = result.results;
  //   });
  // }

  // documentary 
  // documentaryMovie() {
  //   this.service.fetchDocumentaryMovies().subscribe((result) => {
  //     this.documentaryMovieResult = result.results;
  //   });
  // }


  // science-fiction 
  // sciencefictionMovie() {
  //   this.service.fetchScienceFictionMovies().subscribe((result) => {
  //     this.sciencefictionMovieResult = result.results;
  //   });
  // }

  // thriller
  // thrillerMovie() {
  //   this.service.fetchThrillerMovies().subscribe((result) => {
  //     this.thrillerMovieResult = result.results;
  //   });
  // }

}
