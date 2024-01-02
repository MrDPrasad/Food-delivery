import { NgModule } from "@angular/core";
import { AppComponent } from "../../app.component";
import { HeaderComponent } from "../../components/header/header.component";
import { HomeComponent } from "../../components/pages/home/home.component";
import { SearchComponent } from "../../components/pages/search/search.component";
import { CartPageComponent } from "../../components/pages/cart-page/cart-page.component";
import { TitleComponent } from "../../components/pages/title/title.component";
import { NotFoundComponent } from "../../components/pages/not-found/not-found.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { RatingModule } from 'ng-starrating';
import { AppRoutingModule } from './app-routing.module';
import { Tagcomponent } from './components/pages/tag/tag.component';
import { FooPageComponent } from "../../components/pages/foo-page/foo-page.component";





@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        SearchComponent,
        TagComponent,
        FoodPageComponent,
        CartPageComponent,
        TitleComponent,
        NotFoundComponent,

    ],
    imports:[
        BrowserModule,
        AppRoutingModule,
        RatingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }