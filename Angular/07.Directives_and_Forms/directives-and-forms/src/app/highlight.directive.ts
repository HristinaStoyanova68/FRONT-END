import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';

type MyVoid = () => void;

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit, OnDestroy {
  //using HostListener:
  // @HostListener('mouseover', ['$event']) mouseOverHandler(e: MouseEvent) {
  //     console.log('mouseover', e);
  // }

  unsubFromEventsArray: MyVoid[] = [];

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // console.log(this.elRef.nativeElement);

    // ! Bad practice:
    //   this.elRef.nativeElement.style.background = 'orange';

    //Good practice:
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'red');

    const mouseEnterEvent = this.renderer.listen(
      this.elRef.nativeElement,
      'mouseenter',
      this.mouseEnterHandler.bind(this)
    );

    const mouseLeaveEvent = this.renderer.listen(
      this.elRef.nativeElement,
      'mouseleave',
      this.mouseLeaveHandler.bind(this)
    );

    this.unsubFromEventsArray.push(mouseEnterEvent);
    this.unsubFromEventsArray.push(mouseLeaveEvent);
  }

  mouseEnterHandler(e: MouseEvent): void {
    // console.log(e);

    //**Setting Styles*/
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // );

    // this.renderer.setStyle(
    //     this.elRef.nativeElement,
    //     'color',
    //     'red'
    //   );

    //**Setting Classes*/
    this.renderer.addClass(this.elRef.nativeElement, 'highlight');
  }

  mouseLeaveHandler(e: MouseEvent): void {
    // console.log('mouse leave triggered!');

    //**Setting Styles*/
    // this.renderer.setStyle(
    //     this.elRef.nativeElement,
    //     'background-color',
    //     'pink'
    // );

    // this.renderer.setStyle(
    //     this.elRef.nativeElement,
    //     'color',
    //     'initial'
    //   );

    //**Setting Classes*/
    this.renderer.removeClass(this.elRef.nativeElement, 'highlight');
  }

  ngOnDestroy(): void {
    console.log('on destroy invoked!', this.unsubFromEventsArray);

    this.unsubFromEventsArray.forEach((eventFn) => {
        eventFn();
    })
  }
}
