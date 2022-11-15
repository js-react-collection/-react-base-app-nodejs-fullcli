var imglogo = "/public/logo.jpg";
export default function Test() {
  return e("div", null, e("img", {
    src: imglogo,
    alt: "logo"
  }), e("h1", null, "HELLO WORLD!"));
}