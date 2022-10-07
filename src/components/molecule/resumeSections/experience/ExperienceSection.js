import React from 'react';
import SectionHeader from '../../../atoms/sectionHeader/SectionHeader';
import BackgroundDetails from '../../../atoms/backgroundDetails/BackgroundDetails';
import ViewContainer from '../../../atoms/viewContainer/ViewContainer';


const ExperienceSection = ({ state, platform, isFirstSection }) => {
  const experience = getSpecificSectionFromState(state, "experience");

  return (
    <ViewContainer
      platform={platform}
      style={!isFirstSection ? getInlineStyles("sectionContainer") : {}}
    >
      <SectionHeader
        text={experience.sectionHeadline}
        platform={platform}
        updateModal={
          <BackgroundModal
            componentName="experience"
            removeAction={REMOVE_EXPERIENCE}
            updateAction={UPDATE_EXPERIENCE}
            addAction={ADD_EXPERIENCE}
            mainLabel="Position"
            subLabel="Company"
          />
        }
      />
      {experience.data.map((experienceDetails, index) => {
        const { mainTitle, subTitle, id, details, startDate, endDate } =
          experienceDetails;
        return (
          <BackgroundDetailsCard
            mainTitle={mainTitle}
            id={id}
            subTitle={subTitle}
            details={details}
            key={index}
            startDate={startDate}
            endDate={endDate}
            compact={false}
            platform={platform}
            isLastElement={index + 1 === experience.data.length}
            isFirstElement={index === 0}
          />
        );
      })}
    </ViewContainer>
  );
};

export default ExperienceSection;
