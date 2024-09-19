
import page from "page";
import HomeViewModel from "./components/HomeViewModel";
import NotFoundViewModel from "./components/NotFoundViewModel";



page('*', function (ctx: any, next: Function) {
    console.log('Middleware executed on route:', ctx.path);
    next();
});


page("/" ,function () {
    new HomeViewModel().render();
})


page('*', function () {
    new NotFoundViewModel().render();
})

page()