import { Article } from "../models/article.model";
import { data } from "./seed";

export class ArticleData {
    getData(): Article[] {
        let articles: Article[] = [];

        for (let i = 0; i < data.length; i++) {
            articles[i] = {
                title: data[i].title,
                description: data[i].description,
                author: data[i].author,
                imageUrl: data[i].imageUrl
            };
        }

        return articles;
    }
};

// const articleData: { title: string, description: string, author: string, imageUrl: string } = data[i];

//             articles[i] = new Article(
//                 articleData.title,
//                 articleData.description,
//                 articleData.author,
//                 articleData.imageUrl
//                 );