import {UrlController} from "./controller/UrlController";

export const Routes = [{
    method: "get",
    route: "/url",
    controller: UrlController,
    action: "all"
}, {
    method: "get",
    route: "/url/:id",
    controller: UrlController,
    action: "one"
}, {
    method: "post",
    route: "/url",
    controller: UrlController,
    action: "save"
}, {
    method: "delete",
    route: "/url/:id",
    controller: UrlController,
    action: "remove"
}];