const Notes = require('../Models/NotesSchema')


const getalldatakeys = async (key) => {
    try {
        const data = await Notes.find({})
        if (!data) {
            return "Server is Busy"
        }
        else {
            const responcename = data.filter((name) => {
                if (((name.Sub_Name).toLowerCase().replace(/ /g,"")).includes(key.toLowerCase().replace(/ /g,""))) {
                    return name.Sub_Name
                }
            })
            const responcecode = data.filter((name) => {
                if (((name.Sub_Code).toLowerCase().replace(/ /g,"")).includes(key.toLowerCase().replace(/ /g,""))) {
                    return name.Sub_Code
                }
            })
            const code=responcecode.map((b)=>{return {"key":b.Sub_Code,"Sub":false}})
            const name=responcename.map((b)=>{return {"key":b.Sub_Name,"Sub":true}})

            return [...code,...name]
        }
    } catch (error) {
        console.log(error) }
}

const getsearchresult =async(searchdata) => {
    try {
       const result=await Notes.find((searchdata.Sub)?{Sub_Name:searchdata.key}:{Sub_Code:searchdata.key})
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