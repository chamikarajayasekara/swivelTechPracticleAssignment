import type { NextApiRequest, NextApiResponse } from 'next';
import employees from "../../data/employees.json"
type Data = {
    firstName: string
    lastName: string
    email: string
    phone: string
    gender: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // res.status(200).json({ name: 'John Doe' })
    if (req.method ===  "GET"){
        return getEmployeesData(req, res)
    }else if( req.method ===  "POST"){
        return addEmployeesData(req, res)
    }else if(req.method === "PUT"){
        return updateEmployeesData(req, res)
    }else if(req.method === "DELETE"){
        return deleteEmployeesData(req, res)
    }else{
        res.status(404).send({res:"not found method"})
    }
}


async function getEmployeesData(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).send({data:employees})
}

async function addEmployeesData(req: NextApiRequest, res: NextApiResponse) {

}

async function updateEmployeesData(req: NextApiRequest, res: NextApiResponse) {

}

async function deleteEmployeesData(req: NextApiRequest, res: NextApiResponse) {

}