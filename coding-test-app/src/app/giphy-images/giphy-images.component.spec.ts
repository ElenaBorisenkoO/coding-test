import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyImagesComponent } from './giphy-images.component';

describe('GiphyImagesComponent', () => {
  let component: GiphyImagesComponent;
  let fixture: ComponentFixture<GiphyImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphyImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
