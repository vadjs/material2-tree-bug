/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {CdkTreeModule} from '@angular/cdk/tree';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatTreeModule
} from '@angular/material';
import {TreeDemo} from './tree-demo';
import {ChecklistTreeDemo} from './checklist-tree-demo/checklist-tree-demo';
import {ChecklistNestedTreeDemo} from './checklist-tree-demo/checklist-nested-tree-demo';
import {DynamicTreeDemo} from './dynamic-tree-demo/dynamic-tree-demo';
import {LoadmoreTreeDemo} from './loadmore-tree-demo/loadmore-tree-demo';


@NgModule({
  imports: [
    RouterModule.forChild([{path: '', component: TreeDemo}]),
    CdkTreeModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTreeModule,
    MatProgressBarModule,
  ],
  declarations: [
    ChecklistNestedTreeDemo,
    ChecklistTreeDemo,
    TreeDemo,
    DynamicTreeDemo,
    LoadmoreTreeDemo
  ],
})
export class TreeDemoModule {}
