import  { field, number, string, succeed } from "jsonous";

const objJson = '{ "nameB": "Oleg", "age": 13, "animal": {"dog": "Nusha", "cat": "Murthik"}, "friends": {"boy": "Dima", "girl": "Nastya"}}'
const animalDecoder = succeed({})
.assign("dog", field("dog", string))
.assign("cat", field("cat", string))

const friendsDecoder = succeed({})
.assign("maleFriend", field("boy", string))
.assign("femaleFriend", field("girl", string))


const objDecoder = succeed({})
.assign("name", field("nameB", string))
.assign("age", field("age", number))
.assign("pets", field("animal", animalDecoder))
.assign("friends", field("friends", friendsDecoder))
.decodeJson(objJson)


console.log(objDecoder)