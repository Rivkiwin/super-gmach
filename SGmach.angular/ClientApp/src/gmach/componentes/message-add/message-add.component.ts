import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-add',
  templateUrl: './message-add.component.html',
  styleUrls: ['./message-add.component.css']
})
export class MessageAddComponent implements OnInit {

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
