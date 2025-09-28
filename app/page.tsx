'use client';
import Link from "next/link";
import { Fade, Reveal, JackInTheBox } from "react-awesome-reveal";
import { getLocale } from "./lib/locale";

const content = getLocale();

export default function Home() {

  return (
    <div className="pageroot">
      <main>
        <section className="hero">
          <Fade direction="up">
            <h1>{content.hero.title}</h1>
          </Fade>
          <JackInTheBox delay={500}>
            <h2>{content.hero.subtitle}</h2>
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
