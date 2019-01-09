import { Injectable , Component} from "@angular/core";
import { Observable } from "rxjs/Rx";

let temp : {}
let tempId

@Injectable()
export class SharedService {

    constructor(){}

    send(data){
        temp = data
        console.log("Send Data")
        console.log(temp)
    }

    sendProductId(id){
        tempId = id
        console.log(tempId)
    }
 
    fetchData(){
        console.log("fetched data" + temp)
        return temp
    }

    fetchProductId(){
        console.log(tempId)
        return tempId
    }
    
}