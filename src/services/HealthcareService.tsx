import { invoke }  from "@tauri-apps/api";
import mockDataHealthcare from "../mock-data/healthcare";
import { HealthcareItem } from "../views/appointments/HealthcareAutoComplete";
import {v4 as uuidv4} from 'uuid';

function sleep(delay = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
}

export class HealthcareService {
    constructor() {
    }

    public storeNewHealthcare(){
        console.log('storeNewHealthcare');
    }

    public async  getHealthcareNames(): Promise<HealthcareItem[]> {
        console.log('getHealthcareNames');
        await sleep(1e3); // For demo purposes.
        return mockDataHealthcare.map(customer => {
            const v : HealthcareItem = {
                name: customer.name,
                id: uuidv4()
            };
            return v;
        });
    }
}
