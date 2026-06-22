// app/page.js
import { items } from "./data";
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid";

export default function Home() {
  return (
    
    <main>
      <Hero
        title="🎶 My Favorites tracks all year long"
          tagline={<span style={{ color: '#ffffff' }}>A few tracks that just calm my soul and drift me to a world of imaginations that I would not want to leave.</span>}
/>
      <CardGrid items={items} />
    </main>
  );
}


