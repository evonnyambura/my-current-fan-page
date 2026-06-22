// app/components/Card.js
import Image from "next/image";
import styles from "./Card.module.css";
import SoundButton from "./Buttons";

export default function Card({ name, blurb, rating, emoji, image}) {
  return (
    <article className={styles.card}>
      {image ? (
        <Image src={image} alt={name} width={200} height={300} className={styles.image}/>
      ) : (
        <div className={styles.emoji}>{emoji}</div>
      )}
      <h2>{name}</h2>
      <p>{blurb}</p>
      <p className={styles.stars}>{"⭐".repeat(rating)}</p>
    </article>
  );
}

