import { Injectable , Component} from "@angular/core";
import { Observable } from "rxjs/Rx";
import { Nav, Platform, NavController, AlertController } from 'ionic-angular';

@Injectable()

export class Common{

    setDate(value){
        var date = new Date(value).getTime() / 1000

        return date
    }

    getDate(value){
        var datetime = new Date(value * 1000)
        console.log(datetime)
  
        var currentDate = datetime.getDate()
        var month = datetime.getMonth() + 1
        var year = datetime.getFullYear()
  
        var result = currentDate + "/" + month + "/" + year
        console.log(result)
  
        return result
    }

    getTime(value){
        var datetime = new Date(value * 1000)

        var hours = datetime.getHours();
        var minutes : any = datetime.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+ minutes : minutes;
        var result = hours + ':' + minutes + ' ' + ampm;

        return result
    }
}