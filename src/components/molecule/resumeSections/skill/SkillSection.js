import React from 'react';
import SectionHeader from '../../../atoms/sectionHeader/SectionHeader';
import ViewContainer from "../../../atoms/viewContainer/ViewContainer";



const SkillsSection = ({ state, platform, isFirstSection, dispatch }) => {
  const skills = getSpecificSectionFromState(state, "skills");

  return (
    <ViewContainer
      platform={platform}
      style={!isFirstSection ? getInlineStyles("sectionContainer") : {}}
    >
      <SectionHeader
        updateModal={<SkillsSectionModal />}
        platform={platform}
        text={skills.sectionHeadline}
      />
      <ViewContainer style={getInlineStyles("skillsContainer")}>
        {skills.data.map((skill, index) => {
          return (
            <SkillTag
              key={v4()}
              text={skill.text}
              dispatch={dispatch}
              platform={platform}
            />
          );
        })}
      </ViewContainer>
    </ViewContainer>
  );
};

export default SkillsSection;
