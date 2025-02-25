const Questionpaperp = require('../Models/QuestionPaperSchema')


const getalldatakeys = async (key) => {
    try {
        const data = await Questionpaperp.find({})
        if (!data) {
            return "Server is Busy"
        }
        else {
            const responce = data.map((name) => {
                if ((name.Sub_Name.tolowerlocal().trim()).include(key.tolowerlocal().trim())) {
                    return name.Sub_Name
                }
                else if ((name.Sub_Code.tolowerlocal().trim()).include(key.tolowerlocal().trim())) {
                    return name.Sub_Code
                }
            })
            return responce
        }
    } catch (error) {
        throw new Error(error)
    }
}

const getsearchresult =async(searchdata) => {
    try {
       const result=await Questionpaperp.find((searchdata.Sub)?{Sub_Name:searchdata.Sub}:{Sub_Code:searchdata.Code})
       if(!result){
           return "Not Found"
       }
       else{
           return result
       }
    } catch (error) {

    }
}


module.exports = { getalldatakeys, getsearchresult }