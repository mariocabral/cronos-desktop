import { invoke }  from "@tauri-apps/api";
import mockDataHealtcare from "../mock-data/healtcare";
import { HealtCareItem } from "../views/appointments/HealtCareAutoComplete";
import {v4 as uuidv4} from 'uuid';

function sleep(delay = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
}

export class HealtCareService {
    constructor() {
    }

    public storeNewCustomer(){
        console.log('storeNewCustomer');
    }

    public async  getHealtCareNames(): Promise<HealtCareItem[]> {
        console.log('getCustomerNames');
        await sleep(1e3); // For demo purposes.
        return mockDataHealtcare.map(customer => {
            const v : HealtCareItem = {
                name: customer.name,
                id: uuidv4()
            };
            return v;
        });
    }
}
