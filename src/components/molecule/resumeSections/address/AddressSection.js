import React from 'react';
import { View } from '@react-pdf/renderer';


import SectionHeader from '../../../atoms/sectionHeader/SectionHeader';
import ViewContainer from '../../../atoms/viewContainer/ViewContainer';
import SectionContent from '../../../atoms/sectionContent/SectionContent';

const AddressSection = ({ state, platform, isFirstSection, dispatch }) => {
  const address = getSpecificSectionFromState(state, "address");

  return (
    <ViewContainer
      platform={platform}
      style={!isFirstSection ? getInlineStyles("sectionContainer") : {}}
    >
      <SectionHeader
        text={address.sectionHeadline}
        updateModal={<AddressModal />}
        platform={platform}
      />
      <div className="skills-list" style={getInlineStyles("skillsContainer")}>
        <SectionContent
          className="mt-0 p-0"
          placeholder="Profile"
          initialValue={address.data}
          styles={getInlineStyles("profile")}
          actionType={ADD_ADDRESS}
          dispatch={dispatch}
          platform={platform}
        />
      </div>
    </ViewContainer>
  );
};

export default AddressSection;
