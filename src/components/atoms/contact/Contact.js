import React from 'react';
import { Icon } from '@chakra-ui/react';


import ViewContainer from '../viewContainer/ViewContainer';
import Link from '../link/Link';
import Text from '../text/Text';

import LinkedInSvg from "../../../assets/svg/LinkedInSvg";
import MailSvg from "../../../assets/svg/MailSvg";
import InstagramSvg from "../../../assets/svg/InstagramSvg";
import GithubSvg from "../../../assets/svg/GithubSvg";
import PhoneSvg from "../../../assets/svg/PhoneSvg";

const Contact = ({ icon, text, url, isLastElement, platform }) => {
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

export default Contact;
