import { Component, OnInit ,Inject} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { Title,Meta } from '@angular/platform-browser';
import { ShowApiService } from 'src/app/service/show-api.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  
  constructor(private service:ShowApiService, public router: ActivatedRoute,private title:Title,private meta:Meta,  ) {
    // router.get('param');
    
    this.service.bannerApiData().subscribe((val:any)=> {});

   }
   data:any;
   detailsResult:any;
  getMovieVideoResult:any;
  getMovieCastResult:any;
  ngOnInit(): void {
    // let getParamId = this.router.snapshot.paramMap.get('id');
    // console.log(getParamId,'getparamid#');
  
    // this.getshow(getParamId);
    // this.getVideo(getParamId);
    // this.getMovieCast(getParamId);
    this.router.queryParams.subscribe((params:any) =>{

      this.data = params.data
      debugger
      })
      console.log(this.data)
  }


  getshow(data:any){
    this.service.getDetails(data).subscribe(async(result)=>{
        console.log(result,'getmoviedetails#');
        this.detailsResult = await result;

        // updatetags
        this.title.setTitle(`${this.detailsResult.original_title} | ${this.detailsResult.tagline}`);
        this.meta.updateTag({name:'title',content:this.detailsResult.original_title});
        this.meta.updateTag({name:'description',content:this.detailsResult.overview});
     
        // facebook
        this.meta.updateTag({property:'og:type',content:"website"});
        this.meta.updateTag({property:'og:url',content:``});
        this.meta.updateTag({property:'og:title',content:this.detailsResult.original_title});
        this.meta.updateTag({property:'og:description',content:this.detailsResult.overview});
        this.meta.updateTag({property:'og:image',content:`https://image.tmdb.org/t/p/original/${this.detailsResult.backdrop_path}`});

    });
  }

  // getVideo(id:any)
  // {
  //   this.service.getMovieVideo(id).subscribe((result)=>{
  //       console.log(result,'getMovieVideo#');
  //       result.results.forEach((element:any) => {
  //           if(element.type=="Trailer")
  //           {
  //             this.getMovieVideoResult = element.key;
  //           }
  //       });

  //   });
  // }

  // getMovieCast(id:any)
  // {
  //   this.service.getMovieCast(id).subscribe((result)=>{
  //     console.log(result,'movieCast#');
  //     this.getMovieCastResult = result.cast;
  //   });
  // }


}
