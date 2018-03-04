import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';

@NgModule({
    declarations: [
        EnumToArrayPipe
    ],
    imports: [],
    exports: [CommonModule, FormsModule, EnumToArrayPipe],
    providers: []
})
export class CoreModule { }
