import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GmachHomeComponent } from './gmach.home.component';
import 'popper.js';
import 'bootstrap';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        GmachHomeComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(GmachHomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular2'`, () => {
    const fixture = TestBed.createComponent(GmachHomeComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular2');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(GmachHomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angular2 app is running!');
  });
});
