import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfClone]',
})
export class IfCloneDirective {
  private isApplied = false;

  @Input()
  set appIfClone(predicate: boolean) {
    if (!this.isApplied && predicate) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.isApplied = true;
    } else if (this.isApplied) {
      this.viewContainerRef.clear();
      this.isApplied = false;
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}
}
