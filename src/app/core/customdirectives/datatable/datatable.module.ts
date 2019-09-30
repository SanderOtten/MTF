import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableDirective } from './datatable.directive';
import { DefaultSorterComponent } from './defaultsorter.component';
import { PaginatorComponent } from './paginator.component';
import { BootstrapPaginatorComponent } from './bootstrappaginator.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        DataTableDirective,
        DefaultSorterComponent,
        PaginatorComponent,
        BootstrapPaginatorComponent
    ],
    exports: [
        DataTableDirective,
        DefaultSorterComponent,
        PaginatorComponent,
        BootstrapPaginatorComponent
    ],
    providers: [
        DataTableDirective
    ]
})
export class DataTableModule {

}
