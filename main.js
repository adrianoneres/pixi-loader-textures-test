const assetsLibraryURL =
  "https://bramble.imgix.net/v16/worlds/multitheme/tx_objects/to_lightforest-bar-01.png?auto=format&fm=png8&q=20";

const customObjectURL =
  "https://firebasestorage.googleapis.com/v0/b/artery-online.appspot.com/o/custom%2F0245c396-307e-4fe5-ad84-20884b61d9ee%2F5dcd5f7d-09cd-419a-be54-a326291c9f6e?alt=media&token=c6a02e3b-c9eb-4290-8245-9709820cb4c7";

let app = new PIXI.Application({
  width: 800,
  height: 600,
});

const loader = new PIXI.Loader();

// Add the resources without configuring any options:
loader.add("asset-library-example", assetsLibraryURL);
loader.add("custom-object-fail-example", customObjectURL);

// Creates the options object with the loadType property:
const options = { loadType: PIXI.LoaderResource.LOAD_TYPE.IMAGE };

// Add the same resource but with configured options:
loader.add("custom-object-success-example", customObjectURL, options);

// Wait for the resources to load and then print them:
loader.load((_, resources) => {
  console.log("Loader Resources: ", resources);
});

document.body.appendChild(app.view);
