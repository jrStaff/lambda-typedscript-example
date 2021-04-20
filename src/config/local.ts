// local deployment config
// This is kinda useless right now because I don't want to setup a local config for
// all of these adapters and lambda... Also It would just be easiest to do a dev deploy version
// Just here to show some abstraction on config because I hate when config is in code

const localConfig = {
    webhookSigningKey: "something",
};
export default localConfig;
