import { Icon } from '@chakra-ui/icons';
import React from 'react';

import ViewContainer from '../../../atoms/viewContainer/ViewContainer';
import Link from '../../../atoms/link/Link';
import Text from '../../../atoms/text/Text';

import LinkedInSvg from "../PDFComponents/svg/LinkedInSvg";
import MailSvg from "../PDFComponents/svg/MailSvg";
import InstagramSvg from "../PDFComponents/svg/InstagramSvg";
import GithubSvg from "../PDFComponents/svg/GithubSvg";
import PhoneSvg from "../PDFComponents/svg/PhoneSvg";

const ContactOption = ({ icon, text, url, isLastElement, platform }) => {
  let fullURL = `${url}${text}`;
  if (icon === "mail") {
    fullURL = `mailto:${text}`;
  }

  const containerStyles = {
    ...getInlineStyles("contactOption"),
  };

  if (isLastElement) {
    containerStyles.marginBottom = 0;
  }

  const PDFIcon = () => {
    if (icon === "linkedin") {
      return <LinkedInSvg />;
    } else if (icon === "github") {
      return <GithubSvg />;
    } else if (icon === "instagram") {
      return <InstagramSvg />;
    } else if (icon === "phone") {
      return <PhoneSvg />;
    } else {
      return <MailSvg />;
    }
  };

  return (
    <ViewContainer platform={platform} style={containerStyles}>
      {platform === "pdf" ? (
        <PDFIcon />
      ) : (
        <Icon style={getInlineStyles("contactIcon")} name={icon} />
      )}
      {icon === "phone" ? (
        <Text
          platform={platform}
          style={{ ...getInlineStyles("contactInfo"), textDecoration: "none" }}
        >
          {text}
        </Text>
      ) : (
        <Link
          platform={platform}
          href={fullURL}
          style={getInlineStyles("contactInfo")}
        >
          {text}
        </Link>
      )}
    </ViewContainer>
  );
};

export default ContactOption;




