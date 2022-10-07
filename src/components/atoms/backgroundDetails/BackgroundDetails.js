import React from "react";
import { v4 } from "uuid";

import ViewContainer from "../viewContainer/ViewContainer";
import Text from "../text/Text";

const BackgroundDetails = (props) => {
  const {
    mainTitle,
    subTitle,
    details,
    id,
    startDate,
    endDate,
    compact,
    isLastElement,
    isFirstElement,
    platform,
  } = props;

  const styles = getInlineStyles("backgroundContainer", {
    isPDF: platform === "pdf",
  });

  if (isLastElement) {
    delete styles.marginBottom;
  }

  if (isFirstElement) {
    delete styles.marginTop;
  }

  return (
    <ViewContainer platform={platform} style={styles}>
      <ViewContainer
        platform={platform}
        style={getInlineStyles("backgroundDetailDatesContainer")}
      >
        <Text platform={platform} style={getInlineStyles("mainTitle")}>
          {mainTitle}
        </Text>
        {!compact && (
          <Text
            platform={platform}
            style={getInlineStyles("backgroundDetailDates")}
          >
            {startDate.month}, {startDate.year} -
            {endDate ? ` ${endDate.month}, ${endDate.year}` : " Current"}
          </Text>
        )}
      </ViewContainer>
      <Text platform={platform} style={getInlineStyles("subTitle")}>
        {subTitle}
      </Text>

      {!compact && (
        <ViewContainer
          platform={platform}
          style={getInlineStyles("backgroundListContainer")}
        >
          {details.map((res, index) => {
            return (
              <ViewContainer
                style={getInlineStyles("backgroundDetailsContainer")}
                key={index}
              >
                <Text style={getInlineStyles("backgroundDetailPoint")}></Text>
                <Text
                  as="li"
                  platform={platform}
                  key={v4()}
                  style={getInlineStyles("backgroundDetail")}
                >
                  {res.value}
                </Text>
              </ViewContainer>
            );
          })}
        </ViewContainer>
      )}
    </ViewContainer>
  );
};

export default BackgroundDetails;
