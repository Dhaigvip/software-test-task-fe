import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddformComponent } from './addform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

describe('AddformComponent', () => {
    let component: AddformComponent;
    let fixture: ComponentFixture<AddformComponent>;
    let httpClient: HttpClient;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterModule.forRoot([]),
                HttpClientTestingModule,
                ReactiveFormsModule],
            declarations: [AddformComponent]
        })
            .compileComponents();
            httpClient = TestBed.get(HttpClient);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddformComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
