import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { FooterComponent } from './footer.component'


@Component({
    selector: 'test-footer',
    template: `
    <footer-cmp>
        <a href="#" app-name>TCM Core Module</a>
        <a href="#" app-about>Test Application</a>
        <a href="#" app-license>MIT</a>
        <a herf="#" app-copyright>&copy; 2017, Tieto Software Pvt Ltd.</a>
    </footer-cmp>
    `
})
class TestFooterComponent {
    text: string;
}

describe('TestFooterComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestFooterComponent, FooterComponent]
        });
    });

    it('Footer works well', async(() => {
        const fixture = TestBed.createComponent(TestFooterComponent);
        fixture.detectChanges();
        const el = fixture.debugElement.nativeElement as HTMLElement;
        expect(1 + 1).toBe(2);
    }));
});
