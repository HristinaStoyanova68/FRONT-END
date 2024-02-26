import { Article } from "../models/article.model";
import { data } from "./seed";

export class ArticleData {
    getData(): Article[] {
        let articles: Article[] = [];

        for (let i = 0; i < data.length; i++) {
            const articleData: { title: string, description: string, author: string, imageUrl: string } = data[i];

            articles[i] = new Article(
                articleData.title,
                articleData.description,
                articleData.author,
                articleData.imageUrl
                );
        }

        return articles;
    }
}