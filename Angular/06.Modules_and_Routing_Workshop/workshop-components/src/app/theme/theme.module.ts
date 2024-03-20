import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeRoutingModule } from './theme-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { PostsListsComponent } from './posts-lists/posts-lists.component';
import { PostItemComponent } from './posts-lists/post-item/post-item.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AddThemeComponent,
    CurrentThemeComponent,
    ThemesListComponent,
    PostsListsComponent,
    PostItemComponent, 
    MainComponent,
  ],
  imports: [
    CommonModule, ThemeRoutingModule, SharedModule,
  ],
})
export class ThemeModule { }
