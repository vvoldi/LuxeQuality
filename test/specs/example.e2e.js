import HelperQaPage from "../pageobjects/HelperQa.page";

describe("My API application", () => {
    it("should be created a new email", async () => {
        await HelperQaPage.createEmail("98.kovalenko@mailsac.com");
    });

    it("check Email", async () => {
        await HelperQaPage.checkMesages("98.kovalenko@mailsac.com");
    });
});
