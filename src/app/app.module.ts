import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { PermissionService } from "./services/permission.service";
import { CheckPermissionDirective } from "./directives/check-permission.directive";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CheckPermissionDirective],
  providers: [PermissionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
