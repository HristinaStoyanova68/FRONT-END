import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Post } from 'src/app/types/post';

@Component({
    selector: 'app-posts-lists',
    templateUrl: './posts-lists.component.html',
    styleUrls: ['./posts-lists.component.css']
})
export class PostsListsComponent implements OnInit {
    posts: Post[] = [];
    isLoading: boolean = true;

    constructor(private api: ApiService) {

    }
    ngOnInit(): void {

        //short way:
        // this.api.getPosts(5).subscribe((posts) => {
        //     console.log(posts);

        //     this.posts = posts;

        //     setTimeout(() => {
        //         this.isLoading = false;
        //     }, 1000);
            
        // });


        //default way:
        this.api.getPosts(5).subscribe({
            next: (posts) => {
                console.log(posts);

            this.posts = posts;

            setTimeout(() => {
                this.isLoading = false;
            }, 1000);
            },
            error: (err) => {
                console.error('Error: ', err);
                this.isLoading = false;
            },
            
        });
    }
}
