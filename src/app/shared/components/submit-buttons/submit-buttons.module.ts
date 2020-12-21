import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SubmitButtonsComponent } from "./submit-buttons.component";

@NgModule({
  imports: [CommonModule],
  declarations: [SubmitButtonsComponent],
  exports: [SubmitButtonsComponent],
})

export class SubmitButtonsModule {}