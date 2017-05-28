var storage = require('node-persist');
var uuid = require('./').uuid;
var Accessory = require('./').Accessory;
var Camera = require('./').Camera;
var config = require('./Config');

console.log("HAP-NodeJS starting...");

// Initialize our storage system
storage.initSync();

// Front Yard Camera
function frontYardNestUp() {
    var snapshotUrl = config.frontYard;
    var cameraAccessory = new Accessory('Front Yard Nest', uuid.generate("Front Yard Nest"));
    var cameraSource = new Camera(snapshotUrl);
    cameraAccessory.configureCameraSource(cameraSource);

    cameraAccessory.on('identify', function(paired, callback) {
      console.log("Node Camera identify -- Front Yard (Nest)");
      callback(); // success
    });

    // Publish the camera on the local network.
    cameraAccessory.publish({
      username: "EC:22:3D:D3:CE:CA",
      port: 51061,
      pincode: "031-45-154",
      category: Accessory.Categories.CAMERA
    }, true);
}

// Deck Camera
function deckNestUp() {
    var snapshotUrl = config.deck;
    var cameraAccessory = new Accessory('Deck Nest', uuid.generate("Deck Nest"));
    var cameraSource = new Camera(snapshotUrl);
    cameraAccessory.configureCameraSource(cameraSource);

    cameraAccessory.on('identify', function(paired, callback) {
      console.log("Node Camera identify -- Deck (Nest)");
      callback(); // success
    });

    // Publish the camera on the local network.
    cameraAccessory.publish({
      username: "EC:22:3D:D3:CE:CB",
      port: 51062,
      pincode: "031-45-154",
      category: Accessory.Categories.CAMERA
    }, true);
}

// Garage Camera
function garageNestUp() {
    var snapshotUrl = config.garage;
    var cameraAccessory = new Accessory('Garage Nest', uuid.generate("Garage Nest"));
    var cameraSource = new Camera(snapshotUrl);
    cameraAccessory.configureCameraSource(cameraSource);

    cameraAccessory.on('identify', function(paired, callback) {
      console.log("Node Camera identify -- Garage (Nest)");
      callback(); // success
    });

    // Publish the camera on the local network.
    cameraAccessory.publish({
      username: "EC:22:3D:D3:CE:CC",
      port: 51063,
      pincode: "031-45-154",
      category: Accessory.Categories.CAMERA
    }, true);
}

// Basement Camera
function basementNestUp() {
    var snapshotUrl = config.basement;
    var cameraAccessory = new Accessory('Basement Nest', uuid.generate("Basement Nest"));
    var cameraSource = new Camera(snapshotUrl);
    cameraAccessory.configureCameraSource(cameraSource);

    cameraAccessory.on('identify', function(paired, callback) {
      console.log("Node Camera identify -- Basement (Nest)");
      callback(); // success
    });

    // Publish the camera on the local network.
    cameraAccessory.publish({
      username: "EC:22:3D:D3:CE:CD",
      port: 51064,
      pincode: "031-45-154",
      category: Accessory.Categories.CAMERA
    }, true);
}

// Start the cams
frontYardNestUp();
deckNestUp();
garageNestUp();
basementNestUp();


