const puppeteer = require("puppeteer");

class Agnet {
    async init(headless) {
        this.browser = await puppeteer.launch({ headless: headless });
        this.page = await this.browser.newPage();
    }

    async navigate(url) {
        await this.page.goto(url);
        return;
    }

    close() {
        this.browser && this.browser.close()
    }
}

module.exports = Agnet