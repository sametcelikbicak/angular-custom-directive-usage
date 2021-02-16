import { Injectable } from "@angular/core";

@Injectable()
export class PermissionService {
  private validPermissions: ["read", "write", "remove"];

  public verify(permission: string): boolean {
    return this.validPermissions.some(
      validPermission => validPermission === permission
    );
  }
}
