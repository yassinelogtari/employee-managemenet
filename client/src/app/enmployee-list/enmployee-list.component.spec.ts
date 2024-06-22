import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnmployeeListComponent } from './enmployee-list.component';

describe('EnmployeeListComponent', () => {
  let component: EnmployeeListComponent;
  let fixture: ComponentFixture<EnmployeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnmployeeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
