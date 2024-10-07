import { array, field, number, string, succeed } from "jsonous"


const users = '[ {"id": 1, "name": "Anya"}, {"id": 2, "name": "Yana"}, {"id": 3, "name": "Vasya"} ]'

const usersDecoder = succeed({})
.assign("id", field("id", number))
.assign("name", field("name", string))



const arrDecoder = array(usersDecoder)

console.log(arrDecoder.decodeJson(users))