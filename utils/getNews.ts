import { News } from '@/types/news';
import fs from 'fs';
import path from 'path';



const dir = path.join(process.cwd(), 'data', 'news')

function GetNews(): News[] {
    try {
        const files = fs.readdirSync(dir)
        const newsData: News[] = files
            .filter((newsFile: any) => (newsFile).endsWith('.json')) 
            .map((newsFile: any) => {
                return JSON.parse(
                    fs.readFileSync(path.join(dir, newsFile), 'utf-8')
                ) as News;
            });
        return newsData
    }
    catch (error) {
        console.error("Error fetching news:", error);
        return [];
    }
}

export default GetNews