import Link from "next/link";
import { Fade, Reveal, JackInTheBox } from "react-awesome-reveal";

export default function Home() {

  return (
    <div className="pageroot">
      <main>
        <section className="hero">
          <Fade direction="up">
            <h1>Címsor, hú de menő</h1>
          </Fade>
          <JackInTheBox delay={500}>
            <h2>Alcím vagy mi a tosz</h2>
          </JackInTheBox>
        </section>
        <section id="about"></section>
        <section id="experience"></section>
        <section id="contact"></section>
      </main>
      <footer></footer>
    </div>
  );
}
