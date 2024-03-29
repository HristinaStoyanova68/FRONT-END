import { Directive, Input, OnChanges, Optional, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyStructural]',
  exportAs: 'appMyStructural',
})
export class MyStructuralDirective implements OnChanges{
  @Input() appMyStructural: boolean = false;
  @Input() myTmpRef: TemplateRef<any> | undefined;

  constructor(
    @Optional() private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
    ) {
    
   }

   // OnInit :
  //  ngOnInit() : void {
  //   console.log(this.appMyStructural);
  //   console.log(this.templateRef);
  //  }

   ngOnChanges(changes: SimpleChanges): void {
    // console.log('on changes:', this.appMyStructural);
    console.log('myTmpRef', this.myTmpRef);
    console.log('templateRef', this.templateRef);
    
    const template = this.templateRef || this.myTmpRef;

    console.log(template);
    

    if (this.appMyStructural) {
      this.vcRef.createEmbeddedView(
        template,
        // this.templateRef,
        //context
        {
          myCustomValue: 'This is my custom message!',
          myNum: 123,
          $implicit: 'Default value',
        }
        )
    } else {
      this.vcRef.clear()
    }
     
   }
}
