import Page from "./page";
import axios from "axios";

const testToken = "k_DvxdzPEPxfy85q4Z0xSobnaapjFOY8wfFwcec2";

class HelperQaPage extends Page {
    async configAxios() {
        return axios.create({
            baseURL: "https://mailsac.com/api/",
            headers: { Host: "mailsac.com", "Mailsac-Key": `${testToken}` },
        });
    }

    catchErrors(error) {
        console.dir(error);
        if (typeof error.response !== "undefined") {
            console.log("---------------API REQUEST ERROR------------------");
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            console.log("---------------API REQUEST ERROR------------------");
        }
        throw error;
    }
    async createEmail(email) {
        const client = await this.configAxios();
        return client
            .post("https://mailsac.com/api/validations/addresses/", {
                emails: [email],
            })
            .then((response) => {
                console.log(response.data);
                return response.data;
            })
            .catch(this.catchErrors);
    }

    async checkMesages(email) {
        const client = await this.configAxios();
        return client
            .get(`addresses/${email}/messages`)
            .then((response) => {
                console.log(response.data);
                return response.data;
            })
            .catch(this.catchErrors);
    }
}

export default new HelperQaPage();
