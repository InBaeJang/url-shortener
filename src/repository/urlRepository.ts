import {getManager} from "typeorm";
import {Url} from "../entity/Url";

export const test = async () =>{
  const entityManager = getManager(); // you can also get it via getConnection().manager
  const url = await entityManager.findOne(Url, 1);
  if(url){
    url.shortUrl = "Umed";
  }
  console.log("url : " + url)
}
