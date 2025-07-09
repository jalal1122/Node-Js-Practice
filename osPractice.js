const os = require('os');

// Get the Platform
console.log(os.platform());

// Get the CPU Architecture
console.log(os.arch());

// Get the CPU Information
console.log(os.cpus());

// Get the Free Memory
console.log(os.freemem());

// Get the Total Memory
console.log(os.totalmem());

// Get the Home Directory
console.log(os.homedir());

// Get the Temporary Directory
console.log(os.tmpdir());

// Get the Uptime
console.log(os.uptime());

// Get the Network Interfaces
console.log(os.networkInterfaces());

// Get the OS Release
console.log(os.release());

// Get the OS Type
console.log(os.type());

// Get the OS Version
console.log(os.version());

// Get the Load Average
console.log(os.loadavg());

// Get the System Information
console.log({
  platform: os.platform(),
  arch: os.arch(),
  cpus: os.cpus(),
  freemem: os.freemem(),
  totalmem: os.totalmem(),
  homedir: os.homedir(),
  tmpdir: os.tmpdir(),
  uptime: os.uptime(),
  networkInterfaces: os.networkInterfaces(),
  release: os.release(),
  type: os.type(),
  version: os.version(),
  loadavg: os.loadavg()
});
