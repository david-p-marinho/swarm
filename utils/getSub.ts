import SubArea from "@/type/subArea";
import { promises as fs } from "fs";
import path from "path";

export const GetSubs = async() =>{
    const pathJs = path.join(process.cwd(), 'data', 'subCardData.json')
    const file = await fs.readFile(pathJs, 'utf8')

    return JSON.parse(file) as SubArea[]
}