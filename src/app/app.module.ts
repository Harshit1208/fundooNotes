import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatButtonModule, MatInputModule, MatListModule,
  MatCardModule, MatFormFieldModule, MatMenuModule, MatSelectModule, 
  MatOptionModule, MatIconModule, MatSnackBarModule, MatSidenavModule, MatToolbarModule, MatTooltipModule, MatCheckboxModule, MatExpansionModule, MatDialogModule, MatChipsModule, MatDatepickerModule, MatNativeDateModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpServiceService } from '../app/services/http-service.service';
import { UserServiceService } from '../app/services/user-service.service';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NotesComponent } from './components/notes/notes.component';
import { AllNotesComponent } from './components/all-notes/all-notes.component';
import { DeletedNotesComponent } from './components/deleted-notes/deleted-notes.component';
import { ArchivedNotesComponent } from './components/archived-notes/archived-notes.component';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { CollaboratorComponent } from './components/collaborator/collaborator.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ServicePurchaseComponent } from './components/service-purchase/service-purchase.component';
import { CartComponent } from './components/cart/cart.component';
import { LabelsComponent } from './components/labels/labels.component';
import { ShowLabelsComponent } from './components/show-labels/show-labels.component';
import { ReminderComponent } from './components/reminder/reminder.component';
import { MyDatePipePipe } from './pipe/my-date-pipe.pipe';
import { ShowReminderComponent } from './components/show-reminder/show-reminder.component';
import { QuestionComponent } from './components/question/question.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    DashboardComponent,
    NotesComponent,
    AllNotesComponent,
    DeletedNotesComponent,
    ArchivedNotesComponent,
    DialogComponent,
    CollaboratorComponent,
    SearchFilterPipe,
    ServicePurchaseComponent,
    CartComponent,
    LabelsComponent,
    ShowLabelsComponent,
    ReminderComponent,
    MyDatePipePipe,
    ShowReminderComponent,
    QuestionComponent
  ],
  entryComponents:[
    DialogComponent,CollaboratorComponent,
    CartComponent, LabelsComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatCardModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSelectModule,
    MatOptionModule,
    FlexLayoutModule,
    HttpClientModule,
    LayoutModule,
    MatDialogModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FroalaEditorModule.forRoot(),
     FroalaViewModule.forRoot()
  ],
  providers: [
    HttpServiceService,
    UserServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }