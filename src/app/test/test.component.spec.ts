import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HighlightDirective} from 'src/app/share/highlight.directive';
import { TestComponent } from './test.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  let des: DebugElement;
  let bareH2: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightDirective, TestComponent ]
    })
    .compileComponents();
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    // des = fixture.debugElement.queryAll(By.directive(HighlightDirective));

  // the h2 without the HighlightDirective
  bareH2 = fixture.debugElement.query(By.css('h2:not([highlight])'));
    fixture.detectChanges();
  });
  
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
