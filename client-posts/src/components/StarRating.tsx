const Star = () => {
  return <span>⭐</span>; // Puedes usar cualquier ícono de estrella aquí
};

export function Rating({ rating = 0 }) {
  const stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(<Star key={i} />);
  }

  return <div>{stars}</div>;
}
