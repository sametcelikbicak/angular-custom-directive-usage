import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { PermissionService } from "../services/permission.service";

@Directive({
  selector: "[checkPermission]"
})
export class CheckPermissionDirective {
  @Input() public set checkPermission(permissions: string | string[]) {
    this.check(permissions);
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private permissionService: PermissionService
  ) {}

  private check(permissions: string | string[]): void {
    switch (typeof permissions) {
      case "string":
        this.updateView(this.permissionService.verify(permissions));
        break;
      case "object":
        let hasPermission = false;
        permissions.forEach(permission => {
          if (!hasPermission) {
            hasPermission = this.permissionService.verify(permission);
          }
        });
        this.updateView(hasPermission);
        break;
    }
  }

  private updateView(hasPermission: boolean): void {
    if (hasPermission) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
