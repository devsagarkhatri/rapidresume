import React from "react";
import SectionHeader from "../../../atoms/sectionHeader/SectionHeader";
import SectionContent from "../../../atoms/sectionContent/SectionContent";

const ProfileSection = ({ platform, state, isFirstSection, dispatch }) => {
  const userProfile = getSpecificSectionFromState(state, "profile");
  const profile = userProfile.data;

  return (
    <div style={!isFirstSection ? getInlineStyles("sectionContainer") : {}}>
      <SectionHeader
        text={userProfile.sectionHeadline}
        updateModal={<ProfileSectionModal />}
        platform={platform}
      />
      <SectionContent
        className="mt-0 p-0"
        placeholder="Profile"
        initialValue={profile}
        styles={getInlineStyles("profile")}
        actionType={ADD_PROFILE}
        dispatch={dispatch}
        platform={platform}
      />
    </div>
  );
};

export default ProfileSection;
