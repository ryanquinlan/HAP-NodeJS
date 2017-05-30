var storage = require('node-persist');
var uuid = require('./').uuid;
var Accessory = require('./').Accessory;
var Camera = require('./').Camera;
var config = require('./Configuration');

console.log("HAP-NodeJS starting...");

// Initialize our storage system
storage.initSync();

// Create camera accessory
function nestUp(cameraConfig) {
    var cameraAccessory = new Accessory(cameraConfig.name, uuid.generate(cameraConfig.name));
    var cameraSource = new Camera(cameraConfig.snapshotUrl);
    cameraAccessory.configureCameraSource(cameraSource);

    cameraAccessory.on('identify', function(paired, callback) {
      console.log("Node Camera identify -- ", cameraConfig.identity);
      callback(); // success
    });

    // Publish the camera on the local network.
    cameraAccessory.publish({
      username: cameraConfig.username,
      port: cameraConfig.port,
      pincode: cameraConfig.pincode,
      category: Accessory.Categories.CAMERA
    }, true);
}

// Loop through all cameras in config
config.forEach(function(cameraConfig) {
    nestUp(cameraConfig);
});

console.log("HAP-NodeJS is up...");
