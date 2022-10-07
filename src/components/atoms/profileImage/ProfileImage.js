import React, { useState, useEffect } from "react";
import ImageUploading from "react-images-uploading";
import { Icon, Button } from "@chakra-ui/react";
import { Image } from "@react-pdf/renderer";

//actions
// import {
//   ADD_IMAGE,
//   REMOVE_IMAGE,
//   TOGGLE_SECTION_VISIBILITY,
// } from "../../store/actions/types";

// //util
// import { getSpecificSectionFromState } from "../../util/stateUtil";

const RoundedImageContainer = ({
  clickHandler,
  innerStyles,
  removeImageHandler,
}) => {
  return (
    <div className="w-full h-full relative">
      <div
        style={innerStyles ? innerStyles : {}}
        className="w-full h-full rounded-full bg-slate-300 test"
      ></div>
      <Button
        icon
        size="mini"
        className="mt-3 absolute bg-primary-color text-white left-0 top-0 translate-x-1/4 circular translate-y-1"
        onClick={removeImageHandler}
      >
        <Icon name="close" />
      </Button>
      <Button
        icon
        size="mini"
        className="mt-3 absolute bg-primary-color text-white right-0 top-0 -translate-x-1/4 circular translate-y-1"
        onClick={clickHandler}
      >
        <Icon name="user" />
      </Button>
    </div>
  );
};

const ImageContainer = ({ clickHandler, innerStyles, removeImageHandler }) => {
  return (
    <div className="w-full h-full relative">
      <div
        style={innerStyles ? innerStyles : {}}
        className="w-full h-full rounded-full bg-slate-300 test"
      ></div>
      <Button
        icon
        size="mini"
        className="mt-3 absolute bg-primary-color text-white left-0 top-0 translate-x-1/4 circular translate-y-1"
        onClick={removeImageHandler}
      >
        <Icon name="close" />
      </Button>
      <Button
        icon
        size="mini"
        className="mt-3 absolute bg-primary-color text-white right-0 top-0 -translate-x-1/4 circular translate-y-1"
        onClick={clickHandler}
      >
        <Icon name="user" />
      </Button>
    </div>
  );
};

const ProfileImage = ({ styles, platform, state, dispatch, isRound }) => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;
  const userImage = getSpecificSectionFromState(state, "userImage");

  const onChange = (imageList, addUpdateIndex) => {
    dispatch({
      type: ADD_IMAGE,
      payload: imageList,
    });
    // data for submit
    setImages(imageList);
  };

  const handleRemoveImage = () => {
    dispatch({
      type: TOGGLE_SECTION_VISIBILITY,
      payload: {
        componentName: userImage.componentName,
        value: false,
      },
    });
  };

  useEffect(() => {
    setImages(userImage.data.image);
  }, [state]);

  if (!userImage.isVisible) {
    return null;
  }

  if (platform === "pdf" && userImage.data.image.length === 0) {
    return null;
  } else if (platform === "pdf") {
    return (
      <Image
        style={styles}
        alt="profile"
        src={userImage.data.image[0].data_url}
      />
    );
  }

  return (
    <ImageUploading
      multiple={false}
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({ imageList, onImageUpload, onImageUpdate }) => {
        return (
          <div style={styles}>
            {imageList.length === 0 && isRound && (
              <RoundedImageContainer
                removeImageHandler={handleRemoveImage}
                clickHandler={onImageUpload}
              />
            )}
            {imageList.length === 0 && !isRound && (
              <ImageContainer
                removeImageHandler={handleRemoveImage}
                clickHandler={onImageUpload}
              />
            )}
            {imageList.map((image, index) => {
              const innerStyles = {
                backgroundImage: `url(${image.data_url})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
              };
              return isRound ? (
                <RoundedImageContainer
                  key={index}
                  innerStyles={{ ...styles, ...innerStyles }}
                  clickHandler={() => onImageUpdate(index)}
                  removeImageHandler={handleRemoveImage}
                />
              ) : (
                <ImageContainer
                  key={index}
                  innerStyles={{ ...styles, ...innerStyles }}
                  clickHandler={() => onImageUpdate(index)}
                  removeImageHandler={handleRemoveImage}
                />
              );
            })}
          </div>
        );
      }}
    </ImageUploading>
  );
};

export default ProfileImage;
