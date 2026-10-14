import { promises as fs } from "fs";
import path from "path";
import { Member } from "@/types/member";

export const GetMembers = async(target:string): Promise<Member[]> => {
    const dir = path.join(process.cwd(), 'data', 'members')
    let filePath = ''

    switch(target) {
        case 'Mecanica':
            filePath = path.join(dir, 'mecanica.json')
        break

        case 'Programação':
            filePath = path.join(dir, 'ti.json')
        break

        case 'Marketing':
            filePath = path.join(dir, 'marketing.json')
        break

        case 'Eletronica':
            filePath = path.join(dir, 'eletronica.json')
        break

        case 'Gestao':
            filePath = path.join(dir, 'gestao.json')
        break
    }
    
    const jsonFile = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(jsonFile) as Member[]

    return data
}