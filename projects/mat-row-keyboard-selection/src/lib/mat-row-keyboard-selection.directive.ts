import {SelectionModel} from '@angular/cdk/collections';
import {Directive, ElementRef, Host, HostListener, Input, OnInit, Self} from '@angular/core';
import {MatRow, MatTable, MatTableDataSource} from '@angular/material';

@Directive({
  selector: '[matRowKeyboardSelection]'
})
export class MatRowKeyboardSelectionDirective implements OnInit {

  private selection: SelectionModel<any>;
  private dataSource: MatTableDataSource<any>;
  private rows: NodeListOf<HTMLElement>;

  @Input('matRowKeyboardSelection') set MatRowKeyboardSelection(selection) {
    this.selection = selection;
  }

  @Input() rowModel;
  @Input() selectOnFocus = false;
  @Input() deselectOnBlur = false;

  constructor(private el: ElementRef, @Host() @Self() private row: MatRow, @Host() private matTable: MatTable<any>) {}

  ngOnInit(): void {
    if (!this.selection) {
      throw new Error('Attribute \'selection\' is required');
    }
    if (!this.matTable || !this.matTable.dataSource) {
      throw new Error('MatTable [dataSource] is required');
    }
    if (!this.rowModel) {
      throw new Error('[rowModel] is required');
    }
    if (this.el.nativeElement.tabIndex < 0) {
      this.el.nativeElement.tabIndex = 0;
    }
    this.dataSource = this.matTable.dataSource as MatTableDataSource<any>;

    this.rows = this.getTableRows();
  }

  @HostListener('focus', ['$event']) onFocus() {
    if (this.selectOnFocus && !this.selection.isMultipleSelection()) {
      this.selection.select(this.rowModel);
    }
  }

  @HostListener('blur', ['$event']) onBlur() {
    if (this.deselectOnBlur && !this.selection.isMultipleSelection()) {
      this.selection.deselect(this.rowModel);
    }
  }

  @HostListener('keydown', ['$event']) onKeydown(event: KeyboardEvent) {
      let newRow;
      const currentIndex = this.dataSource.data.findIndex(row => row === this.rowModel);
      if (event.key === 'ArrowDown') {
        newRow = this.rows[currentIndex + 1];
      } else if (event.key === 'ArrowUp') {
        newRow = this.rows[currentIndex - 1];
      } else if (event.key === 'Enter' || event.key === ' ') {
        this.selection.toggle(this.rowModel);
        event.preventDefault();
      }
      if (newRow) {
        newRow.focus();
      }
  }

  private getTableRows() {
    let el = this.el.nativeElement;
    while (el && el.parentNode) {
      el = el.parentNode;
      if (el.tagName && el.tagName.toLowerCase() === 'mat-table' || el.hasAttribute('mat-table')) {
        return el.querySelectorAll('mat-row, tr[mat-row]');
      }
    }
    return null;
  }

}
