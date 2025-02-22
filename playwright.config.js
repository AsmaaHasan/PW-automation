const config = {
  testDir: 'POM/tests', 
  timeout: 30000,
  use: {
    baseURL: "https://www.demoblaze.com/",
    headless: false,
    trace:'retain-on-failure',
    video: 'on'
}
}

export default config;