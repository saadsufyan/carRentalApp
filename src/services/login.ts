import { Injectable , Component} from "@angular/core";
import { Observable } from "rxjs/Rx";
import { NetworkService } from './network'


@Injectable()
@Component({})
export class LoginService{
    private basicUrl = "http://52.14.99.136/Carbnb/public/index.php/api/user"
    constructor (public network : NetworkService) {}
 
    onUserLogin(data) : Observable<any> {
        let url = this.basicUrl + "/login";
        return this.network.doPost(url,data)
    }

    onUserSignup(data) : Observable<any> {
        let url = this.basicUrl  + "/signup"
        return this.network.doPut(url, data)
    }
    onGCMUpdate(data)  : Observable<any> {
        let url = this.basicUrl + "/gcm";
        return this.network.doPost(url,data)
    }

    onUserForgotPassword(data) : Observable<any> {
        let url = this.basicUrl + "/forget"
        return this.network.doPost(url, data)
    }

    onUserLogout() : Observable<any> {
        let url = this.basicUrl + "/logout";
        return this.network.doGet(url)
    }


}