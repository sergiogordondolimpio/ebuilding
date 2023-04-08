import { TestBed } from '@angular/core/testing';

import { ToolbarConfigService } from './toolbar-config.service';

describe('ToolbarConfigService', () => {
  let service: ToolbarConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolbarConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
