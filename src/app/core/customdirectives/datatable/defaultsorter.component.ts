import {Component, Input, OnInit} from '@angular/core';
import {DataTableDirective, SortEvent} from './datatable.directive';

@Component({
    selector: 'app-default-sorter',
    templateUrl: './defaultsorter.component.html'
})
export class DefaultSorterComponent implements OnInit {
    @Input('by') sortBy: string;

    isSortedByMeAsc: boolean;
    isSortedByMeDesc: boolean;

    public constructor(private mfTable: DataTableDirective) {
    }

    public ngOnInit(): void {
        this.mfTable.onSortChange.subscribe((event: SortEvent) => {
            this.isSortedByMeAsc = (event.sortBy === this.sortBy && event.sortOrder === 'asc');
            this.isSortedByMeDesc = (event.sortBy === this.sortBy && event.sortOrder === 'desc');
        });
    }

    sort() {
        if (this.isSortedByMeAsc) {
            this.mfTable.setSort(this.sortBy, 'desc');
        } else {
            this.mfTable.setSort(this.sortBy, 'asc');
        }
    }
}
