import  Jwt, { decode }  from "jsonwebtoken";

//Next is added 
const auth = async (request, response, next) => {
    try {

        console.log(request.headers);
        const token = request.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length <500
        let decodeData;

        if(token && isCustomAuth ){

            decodeData = jwt.verify(token, 'Example');

            request.userId = decodeData?.id;
        } else{
            decodeData = jwt.decode(token);
            request.userId = decodeData?.sub;
        }

       next();


    } catch (error) { 
        console.log(error);
        
    }

}
export default auth;