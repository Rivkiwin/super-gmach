import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

interface ToolTipParams extends ICellRendererParams {
  lineBreak?: boolean;
  toolTipArray?: string[];
  toolTip?: string;
}


@Component({
  selector: 'app-tooltip',
  templateUrl: './toolTip.component.html',
  styleUrls: ['./toolTip.component.scss']
})
export class TooltipComponent  {

  public params: ToolTipParams;
  public data: any;
  public toolTip: string;

  constructor() { }

  agInit(params: ToolTipParams): void {
    this.params = params;

    this.toolTip = params.value;
  }
}

  // refresh(params: ToolTipParams): boolean {
  //   this.params = params;
  //   return true;
  // }
