import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  actionadventureResult: any;
  adventureResult: any;
  adventureMovieResult: any;
  scienceFictionMovie: any;

  constructor(private service:MovieApiServiceService) { }

  bannerResult:any=[];
  trendingMovieResult:any=[];
  actionMovieResult:any=[];
  animationMovieResult:any=[];
  comedyMovieResult:any=[];
  documentryMovieResult:any=[];
  sciencefictionMovieResult:any=[];
  thrillerMovieResult:any=[];


  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();

  }

//bannerdata

bannerData(){
  this.service.bannerApiData().subscribe((result)=>{
  console.log(result,'bannerresult#');
  this.bannerResult  = result.results;


  });
}


trendingData(){
  this.service.trendingMovieApiData().subscribe((result)=>{
    console.log(result,'trendingresult#');
    this.trendingMovieResult = result.results;

    //this.trendingMovieResult
  });
}
//action
actionMovie()
{
  this.service.fetchActionMovies().subscribe((result)=>{
    console.log(result,'actionmovies#');
    this.actionMovieResult=result.results;
    
  })
}

//adventure
adventureMovie()
{
  this.service.fetchAdventureMovies().subscribe((result)=>{
    console.log(result,'adventuremovies#');
    this.adventureMovieResult=result.results;
    
  })
}
//animation
animationMovie()
{
  this.service.fetchAnimationMovies().subscribe((result)=>{
    console.log(result,'animationmovies#');
    this.animationMovieResult=result.results;
    
  })
}
//comedy
comedyMovie()
{
  this.service.fetchComedyMovies().subscribe((result)=>{
    console.log(result,'comedymovies#');
    this.comedyMovieResult=result.results;
    
  })
}
//documentry
documentryMovie()
{
  this.service.fetchDocumentryMovies().subscribe((result)=>{
    console.log(result,'documentrymovies#');
    this.documentryMovieResult=result.results;
    
  })
}
//science fiction
sciencefictionMovie()
{
  this.service.fetchScienceFictionMovies().subscribe((result)=>{
    console.log(result,'sciencefictionmovies#');
    this.sciencefictionMovieResult=result.results;
    
  })
}
//thriller
thrillerMovie()
{
  this.service.fetchThrillerMovies().subscribe((result)=>{
    console.log(result,'thrillermovies#');
    this.thrillerMovieResult=result.results;
    
  })
}
}
