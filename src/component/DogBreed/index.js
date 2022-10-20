import { useSelector } from "react-redux";
import { dogBreedApi } from "../../api/api";

export const DogBreed = () => {
  const { data } = dogBreedApi.useGetAllQuery();
  const summary = useSelector(state => state)
  console.log(summary)
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1 }}>hi</div>
      <div
        style={{
          flexGrow: 1,
          display: "grid",
          gridTemplateColumns: "auto auto auto auto auto",
        }}
      >
        {Object.keys(data.message).map((breed) => (
          <div style={{ flex: 2, height: 100, border: "1px solid" }}>
            {breed}
          </div>
        ))}
      </div>
    </div>
  );
};
