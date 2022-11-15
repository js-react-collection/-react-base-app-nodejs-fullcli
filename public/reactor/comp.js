var acss = "/public/test.css";
var imglogo = "/public/logo.jpg";
export default function test() {
  return e("div", null, e("img", {
    src: imglogo,
    alt: "logo"
  }), e("h1", null, "HELLO WORLD!"));
}