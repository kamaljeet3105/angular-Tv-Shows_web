import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShowApiService {

  constructor(private http: HttpClient) {  }
  
  //bannerapidata

  bannerApiData(): Observable<any> {
    return this.http.get('https://api.tvmaze.com/shows');
  }
  // showsapidata 
  showsApiData(): Observable<any> {
    return this.http.get(' https://api.tvmaze.com/shows/1/images');
  }

  // searchshow
  getSearchShow(data: any): Observable<any> {
    debugger
    console.log(data, 'show');

    return this.http.get(`https://api.tvmaze.com/lookup/shows?thetvdb=${data.movieName}`);
  }

  // showsdatails
  getDetails(data: any): Observable<any> {
    return this.http.get(`https://api.tvmaze.com/singlesearch/shows?q=${data.movieName}`);
  }

  // getMovieVideo
  // getMovieVideo(data: any): Observable<any> {
  //   return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
  // }

  // getMovieCast
  // getMovieCast(data: any): Observable<any> {
  //   return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
  // }
  // action 
  // fetchActionMovies(): Observable<any> {
  //   return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
  // }

  // adventure
  // fetchAdventureMovies(): Observable<any> {
  //   return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`);
  // }

  // animation
  // fetchAnimationMovies(): Observable<any> {
  //   return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`);
  // }

  // comedy
  // fetchComedyMovies(): Observable<any> {
  //   return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`);
  // }

  // documentary
  // fetchDocumentaryMovies(): Observable<any> {
  //   return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`);
  // }

  // science-fiction:878

  // fetchScienceFictionMovies(): Observable<any> {
  //   return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`);
  // }

  // thriller:53
  // fetchThrillerMovies(): Observable<any> {
  //   return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`);
  // }
}
