import { Injectable } from '@angular/core';
import { ApiService } from './shared/api.service';
import  Constant  from './shared/constant';
@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private api: ApiService) { }
  getRoomTypeList(params?: any) {
    return this.api.get(Constant.listBaseUrl+'get_room_type', params);
  }
  save(params?: any) {
    return this.api.post(Constant.saveBaseUrl+'create_reservation', params);
  }
  getGuestlist(params?: any) {
    return this.api.post(Constant.guestBaseUrl+'get_guest', params);
  }
  getSessionalRateList(params?: any) {
    return this.api.getWithParams(Constant.fareBaseUrl+'get_available_rate', params);
  }
  getAvailableRoomList(params?: any) {
    return this.api.get(Constant.listBaseUrl+'get_room', params);
  }
}
