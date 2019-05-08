import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';



@Component({
    selector: 'test-component',
    template: `
    <p>{{ text }}</p>
    `
})
class TestComponent {
    text: string;
}

describe('TestComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent]
        });
    });

    it('works well', async(() => {
        const fixture = TestBed.createComponent(TestComponent);
        fixture.componentInstance.text = 'foo';
        fixture.detectChanges();
        const el = fixture.debugElement.nativeElement as HTMLElement;
        expect(el.querySelector('p').textContent).toBe('foo');
    }));
});

describe('Meaningful Test', () => {
    it('1 + 1 => 2', () => {
        expect(1 + 1).toBe(2);
    });
});
