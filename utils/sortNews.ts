import { News } from "@/types/news";

const SortNews = (newsList: News[]) => {
    return [...newsList].sort(
        (a, b) => new Date(b.timeStamp).getTime() - new Date(a.timeStamp).getTime()
    );
}

export default SortNews