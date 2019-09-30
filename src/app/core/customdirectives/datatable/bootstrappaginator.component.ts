import { Component, Input, OnChanges } from '@angular/core';
import { DataTableDirective } from './datatable.directive';
import * as _ from 'lodash';

@Component({
  selector: 'app-bootstrap-paginator',
  templateUrl: './bootstrappaginator.component.html'
})

export class BootstrapPaginatorComponent implements OnChanges {
    @Input('rowsOnPageSet') rowsOnPageSet = [];
    @Input('mfTable') mfTable: DataTableDirective;

    minRowsOnPage = 0;

    ngOnChanges(changes: any): any {
        if (changes.rowsOnPageSet) {
            this.minRowsOnPage = _.min(this.rowsOnPageSet);
        }
    }
}
