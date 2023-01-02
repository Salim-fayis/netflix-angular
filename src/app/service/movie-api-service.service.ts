import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {
  getVidoe(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  baseurl = "https://api.themoviedb.org/3";
  apikey =  "a110bed4865227bdda2d4c9dbaf117e1";


  //bannerapi data


  bannerApiData():Observable<any>
  {
    return this.http.get(` ${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }

  // trendingmovieapidata
  trendingMovieApiData():Observable<any>
  {
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
  }


  // seachmovies
getSearchMovie(data:any):Observable<any>
{
  console.log(data,'movie#');
  
  return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
}
//getmovie details

getMovieDetails(data:any):Observable<any>
{
  return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`);
}

//get movie videos
getMovieVideo(data:any):Observable<any>
{
  return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`);
}

getMovieCast(data:any):Observable<any>{
return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`);
}
//action
  fetchActionMovies():Observable<any>
  {
    return  this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
  }
  //adventure
  fetchAdventureMovies():Observable<any>
  {
    return  this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`);
  }
  //animation
  fetchAnimationMovies():Observable<any>
  {
    return  this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`);
  }
  //comedy
  fetchComedyMovies():Observable<any>
  {
    return  this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`);
  }
    //documentry
    fetchDocumentryMovies():Observable<any>
    {
      return  this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`);
    }
     //science fiction
     fetchScienceFictionMovies():Observable<any>
     {
       return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`);
     }   
      //thriller
  fetchThrillerMovies():Observable<any>
  {
    return  this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`);
  }
   
}


