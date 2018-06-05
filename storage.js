// Define the database as an object
const HomeInventoryDatabase = {}

// Define the arrays (a.k.a. tables) in the database to store each type of items
HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []

const couch = {
  name: "Couch",
  location: "Living room",
  description: "Used to sit"
}

const futon = {
  name: "Futon",
  location: "Living room",
  description: "Used to sit/sleep"
}

const diningTable = {
  name: "Dining Table",
  location: "Dining room",
  description: "Holds things"
}

const diningChair = {
  name: "Dining chair",
  location: "Dining room",
  description: "Holds people"
}

HomeInventoryDatabase.furniture.push(couch,futon,diningTable,diningChair)

const lantern = {
  name: "Paper lantern",
  location: "Living room",
  description: "Looks pretty"
}

const collage = {
  name: "Photo collage",
  location: "Living room",
  description: "A bunch of photos"
}

HomeInventoryDatabase.crafts.push(lantern,collage)

const television = {
  name: "TV",
  location: "Living room",
  description: "Used to watch things"
}

const microwave = {
  name: "Microwave",
  location: "Kitchen",
  description: "Cooks/heats up food"
}

const oven = {
  name: "Oven",
  location: "Kitchen",
  description: "Baking"
}

const refrigerator = {
  name: "Refrigerator",
  location: "Kitchen",
  description: "Keeps things cold"
}

HomeInventoryDatabase.electronics.push(television,microwave,oven,refrigerator)


const saveDatabase = function (databaseObject, localStorageKey) {
  /*
      Convert the Object into a string.
  */
  const stringifiedDatabase = JSON.stringify(databaseObject)

  /*
      Create a key in local storage, and store the string
      version of your inventory database as the value
  */
  localStorage.setItem(localStorageKey, stringifiedDatabase)
}


saveDatabase(HomeInventoryDatabase, "HomeInventory")
