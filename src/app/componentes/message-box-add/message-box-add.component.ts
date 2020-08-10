import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'message-box-add',
  templateUrl: './message-box-add.component.html',
  styleUrls: ['./message-box-add.component.scss']
})
export class MessageBoxAddComponent implements OnInit {

  constructor() { }
  message;
  data;
   @Input() set Message(m)
   {
     debugger
     this.message=JSON.parse(m);
     console.log(this.message);
     var bodyDiv=document.getElementById('modal-body');
    //  for(var key of  this.message.data)
    //  {
    //   bodyDiv.innerHTML=bodyDiv.innerHTML+`<div>${key}</div>`
    //  }
   }

  ngOnInit(): void {
  }

}
