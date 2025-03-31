import ProfileCard from "./components/ProfileCard";
import { skills } from "./skills";

export default function Home() {
  return (
    <ProfileCard
      mainColor="var(--card-background)"
      title1="Tardigrade Lover"
      title2="Tardigrade Master"
      src1="/img/tardigrade-profile.jpg"
      src2="/img/tardigrade-master.jpg"
      subtitle="Développeuse Full-Stack"
      description={
        <>
          <p>
            Pour me mettre dans le bain avant mon premier jour de stage chez{" "}
            <b>Techsysprogram</b>, je vais faire un tour du côté de{" "}
            <b>Tailwind</b>. C'est formidable d'oublier toutes les propriétés
            CSS, mais quel dommage de devoir les réapprendre derrière, c'était
            déjà relou la première fois.
          </p>
          <p>
            Ca, et un (tout) petit peu de <b>TypeScript</b>, et un (tout) petit
            peu de <b>Next.js</b>, histoire de ne pas arriver les mains dans les
            poches.
          </p>
        </>
      }
      backgroundColor="var(--card-background)"
      cardColor="var(--inner-card)"
      textColor="var(--text-card)"
      hoverColor="var(--hover)"
      skills={skills}
    />
  );
}
