import { ManagmentStatusService } from '../services/managment-status.service';

export class ManagementStatusDTO {
   static dataSrvice:ManagmentStatusService
  static   ListStatus:ManagementStatusDTO[];
    id:Number;
    name:string;
    color:string;
    constructor(private MSService:ManagmentStatusService){
        MSService.GetAll().subscribe(x=>ManagementStatusDTO.ListStatus=<ManagementStatusDTO[]>x);
    }
 public  getById(id:Number){
    ManagementStatusDTO.ListStatus.forEach(status => {
        if(status.id==id)
        return status;
    });}

    

}