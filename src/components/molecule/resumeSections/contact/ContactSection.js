import React from "react";
import Contact from "../../../atoms/contact/Contact";
import ContactOption from "./ContactOption";
import SectionHeader from "../../../atoms/sectionHeader/SectionHeader";
import ViewContainer from "../../../atoms/viewContainer/ViewContainer";

const ContactSection = ({ state, platform, isFirstSection }) => {
  const contacts = getSpecificSectionFromState(state, "contact");

  const activeContacts = contacts.data.filter(
    (contact) => contact.value.length > 0
  );

  if (activeContacts.length === 0) {
    return null;
  }

  return (
    <ViewContainer
      style={!isFirstSection ? getInlineStyles("sectionContainer") : {}}
    >
      <SectionHeader
        text={contacts.sectionHeadline}
        updateModal={<Contact />}
        platform={platform}
      />
      <ViewContainer>
        {activeContacts.map((section, index) => {
          const { socialPlatform, value, url } = section;
          return (
            <ContactOption
              url={url}
              key={index}
              text={value}
              platform={platform}
              icon={socialPlatform}
              isLastElement={index + 1 === activeContacts.length}
            />
          );
        })}
      </ViewContainer>
    </ViewContainer>
  );
};

export default ContactSection;
