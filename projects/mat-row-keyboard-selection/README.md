# MatRowKeyboardSelectionDirective

[![GitHub issues](https://img.shields.io/github/issues/douglasgsouza/mat-row-keyboard-selection.png)](https://github.com/douglasgsouza/mat-row-keyboard-selection/issues)
[![GitHub stars](https://img.shields.io/github/stars/douglasgsouza/mat-row-keyboard-selection.png)](https://github.com/douglasgsouza/mat-row-keyboard-selection/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.png)](https://raw.githubusercontent.com/douglasgsouza/mat-row-keyboard-selection/master/LICENSE)

## Demo

https://douglasgsouza.github.io/mat-row-keyboard-selection/

## Table of contents

- [About](#about)
- [Installation](#installing-and-importing)
- [Usage](#using)
- [License](https://raw.githubusercontent.com/douglasgsouza/mat-row-keyboard-selection/master/LICENSE)

## About

This is a simple directive that allows navigate Angular Material Data Table with keyboard. 
This allow Focus MatRow and toogle SelectionModel using keyboard TAB, arrows Up, Down, Enter and Space.

Made with :heart: in Brazil.

## Getting Started

### Installing and Importing

Install the package by command:

```sh
    npm install mat-row-keyboard-selection --save
```

Import the module

```ts
import { MatRowKeyboardSelectionModule } from "mat-row-keyboard-selection";

@NgModule({
    imports: [
        ...
        MatRowKeyboardSelectionModule
    ],
    declarations: [...],
    providers: [...]
})
export class AppModule {}
```

or import only Directive

```ts
import { MatRowKeyboardSelectionDirective } from "mat-row-keyboard-selection";

@NgModule({
    declarations: [MatRowKeyboardSelectionDirective],
})
export class YourModule {}
```

### Using 

With `<table mat-table>`

```html
    <table mat-table [dataSource]="dataSource1">
    ....
    <tr mat-row [matRowKeyboardSelection]="selectionModel" [rowModel]="row" *matRowDef="let row; columns: displayedColumns;"></tr>
```

With `<mat-table>`

```html
    <table mat-table [dataSource]="dataSource1">
    ....
    <mat-row [matRowKeyboardSelection]="selectionModel" [rowModel]="row" *matRowDef="let row; columns: displayedColumns;"></mat-row>
```
 
Keyboard Keys:
 * `Tab` - Focus a row or next element (follow the native tabindex).
 * `Space` and `Enter` - When row focused, toggle row. (Can be disabled with option `toggleOnEnter` = `false`)
 * `Arrow Down` - Move focus to next row.
 * `Arrow Up` - Move focus to previous row.
 
 Case `selectOnFocus` is `True` model is selected when row is focused.

### Options 

You can set options...

```html
    <tr mat-row [matRowKeyboardSelection]="selectionModel" [rowModel]="row" [selectOnFocus]="true" [deselectOnBlur]="true" *matRowDef="let row; columns: displayedColumns;"></tr>
```  

Available options: 

 * `selectOnFocus` - Automatic select on row focus. (default: `false`)
   * If you have other row selection behaviors such as select `on click` or `checkbox selection` I recommend not enable this option and let your component decide when to make selection.
 * `deselectOnBlur` - Automatic deselect on row blur. (default: `false`)
 * `toggleOnEnter` - Toggle Row on press Enter or Space. (default: `true`)

## Dependencies
* Angular Core
* Angular Material (MatTable, MatTableDataSource, MatRow)
* Angular CDK Collections (SelectionModel)

Tested and made with on Angular 7.3.

## License

MIT @ Douglas Gomes de Souza
