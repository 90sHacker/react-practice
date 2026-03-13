import Pizza from "./Pizza";
import pizzaData from "../data";

export default function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData.map((pizza) => (
        <Pizza {...pizza} />
      ))}
    </main>
  );
}
