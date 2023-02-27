
import Database from "../../../database/db";
//import enablePublicAccess from '@cors'


export async function yesOrNo () {
    //await enablePublicAccess(req, res)
  
    const answer = Math.round(Math.random()) ? 'yes' : 'no'
  
    return ({
      data: answer,
      error: null,
    })
  }

export async function allAvosRequest () {
    const db = new Database();
    const  allEntries = await db.getAll()
    const length = allEntries.length
    //console.log(req);
    //res.setHeader('Content-type','application/json')
    //res.status(200).json({data : allEntries, length})
    
    return allEntries;
}


export async function avoByIdRequest (id) {
    const db = new Database()
    const entry = await db.getById(id)
    //console.log(req);
    //res.setHeader('Content-type','application/json')
    //res.status(200).json({data : allEntries, length})
    
    return entry;
}



const allAvos = async function (req, res) {
    const db = new Database()
    const id = req?.query?.id

    const entry = await db.getById(id)
    //console.log(req);
    
    res.statusCode = 200
    res.setHeader('Content-type','application/json')
    await res.end(JSON.stringify(entry))
    
}




export default allAvos;

