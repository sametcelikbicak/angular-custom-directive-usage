import { Injectable } from "@angular/core";

@Injectable()
export class PermissionService {
  private validPermissions = ["read", "write", "remove"];

  public setUserPermission(permission: string | string[]): void {
    switch (typeof permission) {
      case "string":
        this.validPermissions = [permission];
        break;
      case "object":
        this.validPermissions = permission.map(p => p);
        break;
    }
  }

  public verify(permission: string): boolean {
    return this.validPermissions.some(
      validPermission => validPermission === permission
    );
  }
}
