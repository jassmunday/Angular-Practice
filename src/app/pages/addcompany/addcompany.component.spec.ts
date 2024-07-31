import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcompanyComponent } from './addcompany.component';

describe('AddcompanyComponent', () => {
  let component: AddcompanyComponent;
  let fixture: ComponentFixture<AddcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddcompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
