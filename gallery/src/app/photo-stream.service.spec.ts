import { TestBed, inject } from '@angular/core/testing';

import { PhotoStreamService } from './photo-stream.service';

describe('PhotoStreamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoStreamService]
    });
  });

  it('should ...', inject([PhotoStreamService], (service: PhotoStreamService) => {
    expect(service).toBeTruthy();
  }));
});
