import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { TemplatevstempelateurlComponent } from './templatevstempelateurl/templatevstempelateurl.component';
import { CarousalComponent } from './carousal/carousal.component';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from './courses/courses.component';
import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path:'', component: HeaderComponent},
  {path:'courses/course/:id', component: CourseDetailComponent},
  {path:'courses',component: CoursesComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    HeaderComponent,
    TemplatevstempelateurlComponent,
    CarousalComponent,
    CoursesComponent,
    FilterComponent,
    SearchComponent,
    CourseDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
