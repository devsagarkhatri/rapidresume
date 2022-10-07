import React from 'react';
import SectionContent from '../../../atoms/sectionContent/SectionContent';
import ProfileImage from '../../../atoms/profileImage/ProfileImage';
import ViewContainer from '../../../atoms/viewContainer/ViewContainer'



const UserInfoSection = ({ platform, state, dispatch }) => {
  const userInfo = getSpecificSectionFromState(state, "user");
  const userImage = getSpecificSectionFromState(state, "userImage");

  const { name, profession } = userInfo.data;

  return (
    <ViewContainer
      style={getInlineStyles("userInfoContainer", {
        isPDF: platform === "pdf",
        isImagePresent: userImage.data.image.length > 0 && userImage.isVisible,
      })}
      platform={platform}
    >
      <ProfileImage
        state={state}
        dispatch={dispatch}
        platform={platform}
        styles={getInlineStyles("imageStyles")}
      />

      <ViewContainer className="flex flex-col justify-center">
        <SectionContent
          placeholder="Your Name"
          initialValue={name}
          styles={getInlineStyles("name")}
          actionType={ADD_NAME}
          dispatch={dispatch}
          platform={platform}
        />
        <SectionContent
          placeholder="Profession"
          initialValue={profession}
          styles={getInlineStyles("profession")}
          actionType={ADD_PROFESSION}
          dispatch={dispatch}
          platform={platform}
        />
      </ViewContainer>
    </ViewContainer>
  );
};

export default UserInfoSection;
