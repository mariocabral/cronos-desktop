import { invoke }  from "@tauri-apps/api";
import mockDataCustomers from "../mock-data/customers";
import { CustomerItem } from "../views/appointments/CustomerAutoComplete";
import {v4 as uuidv4} from 'uuid';

function sleep(delay = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
}

export class CustomerService {
    constructor() {
    }

    public storeNewCustomer(){
        console.log('storeNewCustomer');
    }

    public async  getCustomerNames(): Promise<CustomerItem[]> {
        console.log('getCustomerNames');
        await sleep(1e3); // For demo purposes.
        return mockDataCustomers.map(customer => {
            const v : CustomerItem = {
                name: customer.fullName,
                id: uuidv4()
            };
            return v;
        });
    }
}
