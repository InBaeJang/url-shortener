import { UrlController } from "./controller/UrlController";

export const Routes = [{
  method: "post",
  route: "/url/shorten",
  controller: UrlController,
  action: "shortenUrl"
}, {
  method: "get",
  route: "/:id",
  controller: UrlController,
  action: "redirect"
}];