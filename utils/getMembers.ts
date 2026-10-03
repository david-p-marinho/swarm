import { promises as fs } from "fs";
import path from "path";
import { Member } from "@/types/member";

export const GetMembers = async(): Promise<[Member[], Member[], Member[], Member[], Member[]]> => {
    const dir = path.join(process.cwd(), 'data', 'members')

    const eletronicaPath = path.join(dir, 'eletronica.json')
    const marketingPath = path.join(dir, 'marketing.json')
    const mecanicaPath = path.join(dir, 'mecanica.json')
    const tiPath = path.join(dir, 'ti.json')
    const gestaoPath = path.join(dir, 'gestao.json')
    
    const [eletronicaFile, marketingFile, mecanicaFile, tiFile, gestaoFile] = await Promise.all([
        fs.readFile(eletronicaPath, 'utf-8'),
        fs.readFile(marketingPath, 'utf-8'),
        fs.readFile(mecanicaPath, 'utf-8'),
        fs.readFile(tiPath, 'utf-8'),
        fs.readFile(gestaoPath, 'utf-8')
    ])

    const eletronica = JSON.parse(eletronicaFile) as Member[]
    const marketing = JSON.parse(marketingFile) as Member[]
    const mecanica = JSON.parse(mecanicaFile) as Member[]
    const ti = JSON.parse(tiFile) as Member[]
    const gestao = JSON.parse(gestaoFile) as Member[]

    return [eletronica, marketing, mecanica, ti, gestao]
}