import Title from "./title";
import GifContainer from "./gif-container";
import Button from "./answerButton";

export default function HomePage() {
  return (
    <>
      <div className="container">
        <Title></Title>
        <GifContainer></GifContainer>
        <Button></Button>
      </div>
    </>
  );
}
