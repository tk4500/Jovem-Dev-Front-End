import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoFinalComponent } from './photo-final.component';

describe('PhotoFinalComponent', () => {
  let component: PhotoFinalComponent;
  let fixture: ComponentFixture<PhotoFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoFinalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotoFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
