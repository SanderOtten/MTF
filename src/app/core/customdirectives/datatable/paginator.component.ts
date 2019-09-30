import {Component, Input, SimpleChange, OnChanges, Optional} from '@angular/core';
import {DataTableDirective, PageEvent} from './datatable.directive';

@Component({
    selector: 'app-paginator',
    template: `<ng-content></ng-content>`
})
export class PaginatorComponent implements OnChanges {

    @Input('mfTable') inputMfTable: DataTableDirective;

    private mfTable: DataTableDirective;

    public activePage: number;
    public rowsOnPage: number;
    public dataLength: number;
    public lastPage: number;

    public constructor(@Optional() private injectMfTable: DataTableDirective) {
      this.dataLength = 0;
    }

    public ngOnChanges(changes: {[key: string]: SimpleChange}): any {
        this.mfTable = this.inputMfTable || this.injectMfTable;
        this.onPageChangeSubscriber(this.mfTable.getPage());
        this.mfTable.onPageChange.subscribe(this.onPageChangeSubscriber);
    }

    public setPage(pageNumber: number): void {
        this.mfTable.setPage(pageNumber, this.rowsOnPage);
    }

    public setRowsOnPage(rowsOnPage: number): void {
        this.mfTable.setPage(this.activePage, rowsOnPage);
    }

    private onPageChangeSubscriber = (event: PageEvent) => {
        this.activePage = event.activePage;
        this.rowsOnPage = event.rowsOnPage;
        this.dataLength = event.dataLength;
        this.lastPage = Math.ceil(this.dataLength / this.rowsOnPage);
    }
}
