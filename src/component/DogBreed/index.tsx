import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import { dogBreedApi } from "../../api";
import { selectDogBreedState } from "../../store";
import { addBreed, resetBreeds } from "../../store/dogBreedSlice";

import { List, Card } from "./component";

import styles from "./styles";

export const DogBreed: React.FC = () => {
  const { data } = dogBreedApi.useGetAllQuery();
  const { breeds } = useSelector(selectDogBreedState);
  const dispatch = useDispatch();

  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  useEffect(() => {
    if (data !== undefined) {
      dispatch(resetBreeds());
      Array.from(Array(100)).map(() => {
        if (data !== undefined) {
          const breedNameList = Object.keys(data.message);
          const index = Math.floor(Math.random() * breedNameList.length);
          dispatch(addBreed(breedNameList[index]));
        }
      });
    }
  }, [data]);

  return (
    <div style={isTablet ? styles.tabletView : styles.container}>
      <div
        style={isTablet ? styles.leftContainerTabletView : styles.leftContainer}
      >
          <h2 style={styles.headerStyle}>Summary</h2>
        <List />
      </div>
      <div style={styles.rightContainer}>
        {breeds.map((name) => (
          <Card breed={name} />
        ))}
      </div>
    </div>
  );
};
