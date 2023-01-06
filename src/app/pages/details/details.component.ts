import { Component, OnInit ,Inject} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import 'rxjs/add/operator/filter';

import { Title,Meta } from '@angular/platform-browser';
import { ShowApiService } from 'src/app/service/show-api.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  orderby: any;
  category: any;
  event:any;
  constructor(private service:ShowApiService, public router: ActivatedRoute,private title:Title,private meta:Meta,  ) {
    // router.get('param');
    
    this.service.bannerApiData().subscribe((val:any)=> {});

   }
   data:any
   rating:any
   name:any
   description:any
   detailsResult:any
  getMovieVideoResult:any
  getMovieCastResult:any;
  ngOnInit(): void {
    // let getParamId = this.router.snapshot.paramMap.get('id');
    // console.log(getParamId,'getparamid#');
  
    // this.router.snapshot.queryParams
    this.router.queryParams.subscribe((param:any) => {

      this.data = param.image
      this.rating=param.rating
      this.name=param.name
      this.description=param.description
      debugger
      })
      console.log(this.data)
    //   this.router.queryParams
    //  .subscribe(params => {
    //     this.orderby =params['orderby'];
    //     console.log(params);
    //   });


    //   this.router.queryParams
    //   .filter((params: { category: any; }) => params.category)
    //   .subscribe((params: { category: any; }) => {
    //     console.log(params); // { category: "fiction" }
    //     this.category = params.category;
    //     console.log(this.category); // fiction
    //   }
    // );
    // }

  //   this.router.queryParamMap
  //   .subscribe((params) => {
  //     this.paramsObject = { ...params.keys, ...params };
  //     console.log(this.paramsObject);
  //   }
  // );
  // this.router.queryParams.subscribe((params:any) =>{
  //   let event = params['events']; 
  //   this.data = params.data
  //   debugger
  //   })
   

    
  }


  // getshow(data:any){
  //   this.service.getDetails(data).subscribe(async(result)=>{
  //       console.log(result,'getmoviedetails#');
  //       this.detailsResult = await result;

  //       // updatetags
  //       this.title.setTitle(`${this.detailsResult.original_title} | ${this.detailsResult.tagline}`);
  //       this.meta.updateTag({name:'title',content:this.detailsResult.original_title});
  //       this.meta.updateTag({name:'description',content:this.detailsResult.overview});
     
  //       // facebook
  //       this.meta.updateTag({property:'og:type',content:"website"});
  //       this.meta.updateTag({property:'og:url',content:``});
  //       this.meta.updateTag({property:'og:title',content:this.detailsResult.original_title});
  //       this.meta.updateTag({property:'og:description',content:this.detailsResult.overview});
  //       this.meta.updateTag({property:'og:image',content:`https://image.tmdb.org/t/p/original/${this.detailsResult.backdrop_path}`});

  //   });
  // }

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
