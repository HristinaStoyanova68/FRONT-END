import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
    constructor(
        private userService: UserService,
        private activatedRoute: ActivatedRoute) {}

ngOnInit(): void {

    this.activatedRoute.params.subscribe((value) => {
        const id = value['id'];
        this.userService.getSingleUser(id).subscribe((user) => {
            console.log(user);
        })
    })

    //second way:
    // console.log(this.activatedRoute.snapshot.data['user']);
    
}
}
