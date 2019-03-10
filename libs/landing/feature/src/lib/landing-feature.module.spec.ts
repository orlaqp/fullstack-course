import { async, TestBed } from '@angular/core/testing';
import { LandingFeatureModule } from './landing-feature.module';

describe('LandingFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LandingFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LandingFeatureModule).toBeDefined();
  });
});
