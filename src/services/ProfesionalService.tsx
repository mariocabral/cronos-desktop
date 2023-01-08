import { invoke }  from "@tauri-apps/api";

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
}
