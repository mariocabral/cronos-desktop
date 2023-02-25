import { invoke }  from "@tauri-apps/api";
import { ProfesionalItem } from "../views/appointments/ProfesionalAutoComplete";
import mockDataProfesionals from "../mock-data/profesional";
import {v4 as uuidv4} from 'uuid';


function sleep(delay = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
}

export class ProfesionalService {
    constructor() {
    }

    public storeNewProfesional(){
        const profesional = {
            firstName: "fisrName", 
            lastName: "lastName", 
            degree: "degree", 
            licence: "licence", 
            email: "email", 
            enabled: true,
            phones: [{
                phone: "1233", 
                enabled: true,
            }]
        }

        invoke('create_profesional', {
            profesional: profesional
          });
    }

    public async getProfesionalsNames(): Promise<ProfesionalItem[]> {
        console.log('getProfesionalsNames');
        await sleep(1e3); // For demo purposes.
        return mockDataProfesionals.map(profesional => {
            const v : ProfesionalItem = {
                name: profesional.fullName,
                id: uuidv4()
            };
            return v;
        });
    }
}
