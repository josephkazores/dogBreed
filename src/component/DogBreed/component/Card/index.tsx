import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { dogImagesApi } from "../../../../api";
import { likeItem } from "../../../../store/dogBreedSlice";
import styles from "./styles";

export const Card: React.FC<{ breed: string }> = ({ breed }) => {
  const dispatch = useDispatch();
  const [getImage, { data: image }] =
    dogImagesApi.endpoints.getImageByName.useLazyQuery();

  useEffect(() => {
    if (breed) (async () => await getImage(breed))();
  }, [breed]);

  const onClick = () => dispatch(likeItem(breed));
  return (
    <div
      onClick={onClick}
      style={{
        ...styles.cardContainer,
        backgroundImage: `url("${image !== undefined ? image.message : ""}")`,
      }}
    />
  );
};
