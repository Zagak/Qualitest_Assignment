import { Input } from "../components/Input/Input";
import { PageWrapper } from "./styles";
import {Slideshow} from "../components/SlideShow/SlideShow";

export const Home = () => {

  return (
    <PageWrapper>
        <Input/>
        <Slideshow />
    </PageWrapper>
  );
};
