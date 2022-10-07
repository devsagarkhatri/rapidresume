import React from 'react';
import BackgroundDetails from '../../../atoms/backgroundDetails/BackgroundDetails';
import SectionHeader from '../../../atoms/sectionHeader/SectionHeader';
import ViewContainer from '../../../atoms/viewContainer/ViewContainer';




const EducationSection = ({ state, platform, isFirstSection }) => {
  const education = getSpecificSectionFromState(state, "education");

  return (
    <ViewContainer
      style={!isFirstSection ? getInlineStyles("sectionContainer") : {}}
    >
      <SectionHeader
        text={education.sectionHeadline}
        platform={platform}
        updateModal={
          <BackgroundModal
            componentName="education"
            removeAction={REMOVE_EDUCATION}
            updateAction={UPDATE_EDUCATION}
            addAction={ADD_EDUCATION}
            mainLabel="Program"
            subLabel="College"
          />
        }
      />
      {education.data.map((educationDetails, index) => {
        const { mainTitle, subTitle, id, details, startDate, endDate } =
          educationDetails;
        return (
          <BackgroundDetailsCard
            mainTitle={mainTitle}
            id={id}
            subTitle={subTitle}
            details={details}
            key={v4()}
            startDate={startDate}
            endDate={endDate}
            compact={false}
            platform={platform}
            isFirstElement={index === 0}
            isLastElement={index + 1 === education.data.length}
          />
        );
      })}
    </ViewContainer>
  );
};

export default EducationSection;
