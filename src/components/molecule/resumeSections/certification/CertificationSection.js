import React from 'react';
import ViewContainer from '../../../atoms/viewContainer/ViewContainer';
import SectionHeader from '../../../atoms/sectionHeader/SectionHeader';
import BackgroundDetails from '../../../atoms/backgroundDetails/BackgroundDetails';


const CertificationSection = ({ state, platform, isFirstSection }) => {
  const certifications = getSpecificSectionFromState(state, "certifications");

  return (
    <ViewContainer
      style={!isFirstSection ? getInlineStyles("sectionContainer") : {}}
      platform={platform}
    >
      <SectionHeader
        text={certifications.sectionHeadline}
        updateModal={
          <BackgroundModal
            componentName="certifications"
            removeAction={REMOVE_CERTIFICATION}
            updateAction={UPDATE_CERTIFICATION}
            addAction={ADD_CERTIFICATION}
            mainLabel="Certification"
            subLabel="Institude"
          />
        }
        platform={platform}
      />
      {certifications.data.map((certificationDetails, index) => {
        const { mainTitle, subTitle, id, details, startDate, endDate } =
          certificationDetails;

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
            isLastElement={index + 1 === certifications.data.length}
          />
        );
      })}
    </ViewContainer>
  );
};

export default CertificationSection;
