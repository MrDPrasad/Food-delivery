import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CartPageComponent } from "../src/app/components/pages/cart-page/cart-page.component";
import { HomeComponent } from "../src/app/components/pages/home/home.component";
import { LoginComponent } from "../src/app/components/pages/login/login.component";


const routes: Routes = [
    {
        path:'', component:HomeComponent
    },
    {
        path:'search/:searchTerm', component:HomeComponent
    },
    {
        path:'tag/:tag', component:HomeComponent
    },
    {
        path:'food/:id', component:FoodPageComponent
    },
    {
        path:'cart=page', component:CartPageComponent
    },
    {
        path:'login', component:LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot],
})