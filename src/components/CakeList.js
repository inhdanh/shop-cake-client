import { useAsync } from "../hooks/useAsync";
import { getCakes } from "../services/cakes";
import { Link } from "react-router-dom";

export function CakeList() {
  const { loading, error, value: cakes } = useAsync(getCakes);

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>{error}</h1>;

  return cakes.map((cake) => {
    return (
      <h1 key={cake.id}>
        <Link className="text-blue-500" to={`/cakes/${cake.id}`}>
          {cake.name}
        </Link>
      </h1>
    );
  });
}
