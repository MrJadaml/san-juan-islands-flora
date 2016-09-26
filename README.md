# San Juan Flora

WIP - An API for information regarding plants that are native and well suited for the region of the San Juan Islands.

The base list of flora that this API works from was provided by the Washington Native Plant Society. This DOC was cleaned up so that the _scientific_, _common_, and _family_ names could be easily parsed into JSON to _seed_🌱 our _plants_🌿 data (hehehe) into a Mongo🍃 database (their logo is a leaf, it keeps getting better). The original DOC can be found here: [San Juan County species list](http://www.wnps.org/plant_lists/counties/san_juan/san_juan_county.html)


### Startup instructions:

Spin up a MongoDB process so that you can import your seed data:

`mongod`

Create a new Mongo database named _san-juan-flora_ with a collection named _flora_:

`mongoimport --db san-juan-flora --collection flora --type json --file seedDataGarden.json --jsonArray`
