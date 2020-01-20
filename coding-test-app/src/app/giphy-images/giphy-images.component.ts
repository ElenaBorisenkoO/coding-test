import { Component, OnInit, OnDestroy } from '@angular/core';
import { GiphyImagesService } from './giphy-images.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IImage } from '../shared/interfaces/base-response';

@Component({
  selector: 'app-giphy-images',
  templateUrl: './giphy-images.component.html',
  styleUrls: ['./giphy-images.component.scss']
})
export class GiphyImagesComponent implements OnInit, OnDestroy {

  images: IImage[] = [];
  categories = ['hot', 'potato', 'bitch please', 'omg', 'none of my busines'];
  category: string;
  isLoading = true;
  private searchedImages: IImage[] = [];
  private destroy$ = new Subject();
  private offset = 0;
  private perPage = 9;

  constructor(private giphyImagesService: GiphyImagesService) { }

  ngOnInit() {
    this.loadImages();
  }

  loadImages() {
    this.giphyImagesService.getImages()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        this.images = result.data;
        this.isLoading = false;
      });
  }

  loadMoreAllImages(offset, limit) {
    this.giphyImagesService.getMoreImages(offset, limit)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (result) => {
          this.images = this.images.concat(result.data);
          this.isLoading = false;
        }
      );
  }

  searchByImagesCategory(category) {
    if (this.category === category) {
      return;
    }
    this.category = category;
    this.isLoading = true;
    this.getImagesByCategory(this.offset, this.perPage, this.category);
  }

  getImagesByCategory(offset, limit, category) {
    this.giphyImagesService.getImagesByCategory(offset, limit, category)
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        this.searchedImages = this.searchedImages.concat(result.data);
        this.images = this.searchedImages;
        this.isLoading = false;
      });
  }

  loadMoreImages() {
    this.offset = this.offset + this.perPage;
    if (!!this.category) {
      this.getImagesByCategory(this.offset, this.perPage, this.category);
    }
    this.loadMoreAllImages(this.offset, this.perPage);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
