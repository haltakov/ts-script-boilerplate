import * as os from "os";

const baseMessage = "Hello World";

// Information from the 'os' module
const hostname = os.hostname();
const platform = os.platform();
const username = os.userInfo().username;

// Log information about the system
console.log(`${baseMessage} from user '${username}' on host '${hostname}' (platform: ${platform}).`);
console.log(`System Uptime: ${Math.floor(os.uptime() / 60)} minutes.`);
