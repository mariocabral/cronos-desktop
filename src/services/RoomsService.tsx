import { invoke }  from "@tauri-apps/api";
import mockDataRooms from "../mock-data/rooms";
import { RoomsItem } from "../views/appointments/RoomsAutoComplete";
import {v4 as uuidv4} from 'uuid';

function sleep(delay = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
}

export class RoomsService {
    constructor() {
    }

    public storeNewRooms(){
        console.log('storeNewRooms');
    }

    public async  getRoomsNames(): Promise<RoomsItem[]> {
        console.log('getRoomsNames');
        await sleep(1e3); // For demo purposes.
        return mockDataRooms.map(room => {
            const v : RoomsItem = {
                name: room.name,
                id: uuidv4()
            };
            return v;
        });
    }
}
