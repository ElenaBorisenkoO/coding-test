import { TestBed } from '@angular/core/testing';

import { GiphyImagesService } from './giphy-images.service';

describe('GiphyImagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiphyImagesService = TestBed.get(GiphyImagesService);
    expect(service).toBeTruthy();
  });
});
