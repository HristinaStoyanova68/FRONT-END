import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { FooterOnlyLayoutComponent } from "../footer-only-layout/footer-only-layout.component";
import { RegisterComponent } from "./register/register.component";


const routes: Routes = [
    {path:'login', component: FooterOnlyLayoutComponent, children: [
        {path: '', component: LoginComponent},
    ]},
    {path: 'register', component: FooterOnlyLayoutComponent, children: [
        {path: '', component: RegisterComponent},
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class UserRoutingModule {}