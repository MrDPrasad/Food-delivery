



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
        LoginComponent
            
    ],
    imports: [
        BrowserModule,
        BrowserAnimationModule,
        ApproRoutingModule,
        RatingModule,
        HttpClientModule,
        ReactiveFormsModule,
        ToastrModule.forRoot({
            timeOut:4000,
            positionClass:'toast-bottom-right',
            newestOnTop:false
        })
    ],
    providers:[],
    bootstrap: [AppComponent]
})
export class AppModule { }