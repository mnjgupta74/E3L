import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatCommonModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  imports: [BrowserAnimationsModule,
    MatAutocompleteModule,
    // MatBadgeModule,MatBottomSheetModule,
    MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatCommonModule, MatDatepickerModule, MatDialogModule,
    //  MatDividerModule,MatExpansionModule, 
    MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule,
    // MatLineModule,
    MatListModule, MatMenuModule,
    // MatNativeDateModule, MatOptionModule, 
    MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
    // MatPseudoCheckboxModule, MatRadioModule, 
    MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule,
    // MatTabsModule,
    MatToolbarModule, MatTooltipModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatDividerModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatSortModule,
    MatTabsModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    OverlayModule,
    MatRadioModule,

    // MatTreeModule
  ],
  declarations: [],
  exports: [BrowserAnimationsModule,
    MatAutocompleteModule,
    // MatBadgeModule,MatBottomSheetModule,
    MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatCommonModule, MatDatepickerModule, MatDialogModule,
    //  MatDividerModule,MatExpansionModule, 
    MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule,
    // MatLineModule,
    MatListModule, MatMenuModule,
    //  MatNativeDateModule, MatOptionModule, 
    MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
    // MatPseudoCheckboxModule, MatRadioModule, 
    MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule,
    // MatTabsModule,
    MatToolbarModule, MatTooltipModule,
    // MatTreeModule
  ]
})
export class MaterialModule { }