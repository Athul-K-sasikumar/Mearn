import commonAPI from "./commonAPI"
import SERVERURL from "./serverUrl"

export const registerApi= async(reqBody)=>{
    
return await commonAPI("POST",`${SERVERURL}/register`,reqBody)

}