import puppeteer, {EmulateOptions, Page} from "puppeteer";
import * as devices from 'puppeteer/DeviceDescriptors';
import {Device} from "puppeteer/DeviceDescriptors";
const iPhonex = devices['iPhone X'];
const Nexus = devices['Nexus 10'];
const GalaxyNote3 = devices['Galaxy Note 3'];

interface Agent {
  page: Page,
  close: () => void
}

async function spawnAgent(url: string, device?: Device): Promise<Agent> {
  let browser = await puppeteer.launch({ headless: false });
  let page = await browser.newPage();

  if (device) {
    await page.emulate(device as EmulateOptions);
  }

  await page.goto(url);

  return {page, close: () => { browser.close() }};
}

describe("Open ProntoTools Website", () => {
  const url = "https://games.devtales.net";
  let agents: Agent[] = [];

  beforeEach(async () => {
    const temp = await Promise.all([
      spawnAgent(url, iPhonex),
      spawnAgent(url, Nexus),
      spawnAgent(url, GalaxyNote3),
      spawnAgent(url)
    ]);

    agents = [...temp];
  });

  afterEach(() => {
    agents.forEach((a) => a.close());
  });

  test("", async () => {
    const title = await agents[0].page.title();
    const title2 = await agents[1].page.title();
    expect(title).toBe("Devtales Games");
    expect(title2).toBe("Devtales Games");
  });
});
