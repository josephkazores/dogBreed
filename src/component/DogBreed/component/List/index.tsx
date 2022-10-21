import React from "react";
import { useSelector } from "react-redux";
import { selectDogBreedState } from "../../../../store";
import styles from "./styles";

export const List: React.FC = () => {
  const { breeds, likes } = useSelector(selectDogBreedState);

  return (
    <>
      {[...new Set(likes)].map((name) => {
        const count = breeds.filter((breed) => breed === name).length;
        const likeCount = likes.filter((breed) => breed === name).length;

        console.log(name, count, likeCount);

        return (
          <div style={styles.listContainer}>
            <strong style={styles.nameStyle}>{name}</strong>
            <ul>
              <li>count: {count}</li>
              <li>likes: {likeCount}</li>
            </ul>
          </div>
        );
      })}
    </>
  );
};
