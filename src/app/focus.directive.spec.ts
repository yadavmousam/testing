import { FocusDirective } from './focus.directive';
import {TestBed, ComponentFixture} from '@angular/core/testing';
import {DebugElement} from "@angular/core";
import { HomeComponent } from './home/home.component';
import {By} from "@angular/platform-browser";

describe('FocusDirective:appFocus', () => {
  let component: HomeComponent;
  let inputEl: DebugElement;
  let fixture: ComponentFixture<HomeComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent,FocusDirective]
    });
  
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
  });

  // it('hovering over input', () => {
  //   inputEl.triggerEventHandler('mouseover', null);
  //   fixture.detectChanges();
  //   expect(inputEl.nativeElement.style.backgroundColor).toBe('red');

  //   inputEl.triggerEventHandler('mouseout', null);
  //   fixture.detectChanges();
  //   expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit');
  // });

  
});
