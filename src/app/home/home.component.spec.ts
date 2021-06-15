import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {FocusDirective} from 'src/app/focus.directive';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let inputEl: DebugElement;
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ HomeComponent,FocusDirective ]
  //   })
    
  //   .compileComponents();
  //   fixture = TestBed.createComponent(HomeComponent);
  //   component = fixture.componentInstance;
  //   inputEl = fixture.debugElement.query(By.css('input'));
  // });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('hovering over input', () => {
  //   inputEl.triggerEventHandler('mouseover', null);
  //   fixture.detectChanges();
  //   expect(inputEl.nativeElement.style.backgroundColor).toBe('red');

  //   inputEl.triggerEventHandler('mouseout', null);
  //   fixture.detectChanges();
  //   expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit');
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
