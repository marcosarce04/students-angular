import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatToolbar } from '@angular/material';

const materialModules = [
    MatToolbarModule
]

@NgModule({
    imports:[CommonModule, materialModules],
    exports:[materialModules]
})
export class AppMaterialModule{}