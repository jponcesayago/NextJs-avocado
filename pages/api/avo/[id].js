
import Database from "../../../database/db";
import {NextApiRequest, NextApiResponse  } from "next";

const avoById = async function (req, res) {
    const db = new Database()
    const id = req?.query?.id

    const entry = await db.getById(id)
    //console.log(req);
    
    res.statusCode = 200
    res.setHeader('Content-type','application/json')
    res.setHeader('mode','cors')
    await res.end(JSON.stringify(entry))
    
}


export default avoById;