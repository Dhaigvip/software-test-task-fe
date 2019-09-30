import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditformComponent } from './editform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddformComponent', () => {
    let component: EditformComponent;
    let fixture: ComponentFixture<EditformComponent>;
    let httpClient: HttpClient;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientTestingModule,
                ReactiveFormsModule
            ],
            declarations: [EditformComponent]
        })
            .compileComponents();
        httpClient = TestBed.get(HttpClient);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditformComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
