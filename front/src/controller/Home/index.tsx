import HomeSobre from "view/Home/Sobre";
import HomeCliente from "view/Home/Cliente";
import HomeVideo from "view/Home/Video";
import CtaContact from "components/CtaContact";

export default function Home() {
  return (
    <>
      <HomeSobre />
      <HomeCliente />
      <HomeVideo />
      <CtaContact />
    </>
  );
}