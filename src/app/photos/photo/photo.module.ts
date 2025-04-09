import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo.component';
import { CommonModule } from '@angular/common';
import { provideHttpClient  } from '@angular/common/http';

@NgModule({
    declarations: [PhotoComponent],
    imports: [
        CommonModule,        
    ],
    providers: [provideHttpClient()],
    exports: [ PhotoComponent ]
})
export class PhotoModule { }