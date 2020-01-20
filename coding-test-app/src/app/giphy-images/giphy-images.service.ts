import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBaseResponse } from '../shared/interfaces/base-response';

@Injectable({
  providedIn: 'root'
})
export class GiphyImagesService {

  private imagesApiUrl = 'http://api.giphy.com/v1/gifs';
  private APIKEY = 'dc6zaTOxFJmzC';

  constructor(private http: HttpClient) { }

  getImages(): Observable<IBaseResponse> {
    return this.http.get<IBaseResponse>(`${this.imagesApiUrl}/search?q='all'&api_key=dc6zaTOxFJmzC&limit=9`);
  }

  getMoreImages(offset, limit): Observable<IBaseResponse> {
    return this.http.get<IBaseResponse>(`${this.imagesApiUrl}/trending?api_key=${this.APIKEY }&offset=${offset}&limit=${limit}`);
  }

  getImagesByCategory(offset, limit, category): Observable<IBaseResponse> {
    return this.http.get<IBaseResponse>(`${this.imagesApiUrl}/search?api_key=${this.APIKEY}&offset=${offset}&limit=${limit}&q=${category}`);
  }
}
