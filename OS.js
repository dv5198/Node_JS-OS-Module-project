/*Get the following information about the computer's operating system:
OS CPU architecture
Free memory of the system
Total memory of the system
OS Platform
Information about the current user*/

var os = require('os');
console.log("CPU Architecture: " + os.arch());
console.log("Free memory of the system: " + os.freemem());
console.log("Total memory of the system: " + os.totalmem());
console.log("Platform: " + os.platform());
console.log("User Information: " + os.userInfo());