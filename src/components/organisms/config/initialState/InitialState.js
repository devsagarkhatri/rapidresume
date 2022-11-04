import { v4 } from "uuid";

//Default theme
let primaryColor = "#2185d0";
let secondaryColor = "#000000";
let baseFontSize = "24pt";
let baseFontFamily = "Roboto";

export let initialSectionState = [
  {
    id: v4(),
    componentName: "experience",
    sectionHeadline: "Work Experience",
    isVisible: true,
    canToggle: true,
    data: [
      {
        mainTitle: "Positon",
        subTitle: "Company",
        id: v4(),
        details: [
          {
            value:
              "This is responsibility number 1 that you use to perform at this company",
            id: v4(),
          },
          {
            value:
              "This is responsibility number 2 that you use to perform at this company",
            id: v4(),
          },
        ],
        startDate: {
          month: "Jun",
          year: 2021,
        },
      },
      {
        mainTitle: "Positon",
        subTitle: "Company",
        id: v4(),
        details: [
          {
            value:
              "This is responsibility number 1 that you use to perform at this company",
            id: v4(),
          },
          {
            value:
              "This is responsibility number 2 that you use to perform at this company",
            id: v4(),
          },
        ],
        startDate: {
          month: "Mar",
          year: 2020,
        },
        endDate: {
          month: "Jun",
          year: 2021,
        },
      },
      {
        mainTitle: "Positon",
        subTitle: "Company",
        id: v4(),
        details: [
          {
            value:
              "This is responsibility number 1 that you use to perform at this company",
            id: v4(),
          },
          {
            value:
              "This is responsibility number 2 that you use to perform at this company",
            id: v4(),
          },
        ],
        startDate: {
          month: "Jan",
          year: 2019,
        },
        endDate: {
          month: "Mar",
          year: 2020,
        },
      },
    ],
    placement: "main",
    side: "right",
  },
  {
    id: v4(),
    componentName: "userImage",
    sectionHeadline: "Image",
    isVisible: true,
    canToggle: true,
    placement: "header",
    side: "left",
    data: {
      image: [],
    },
  },
  {
    id: v4(),
    componentName: "user",
    sectionHeadline: "Name and Profession",
    isVisible: true,
    canToggle: false,
    placement: "header",
    side: "left",
    data: {
      name: "Your Name",
      profession: "Your Profession",
    },
  },
  {
    id: v4(),
    componentName: "profile",
    sectionHeadline: "Profile",
    isVisible: true,
    canToggle: true,
    placement: "main",
    side: "left",
    data: "A resume profile statement is a brief list or a few sentences at the top of your resume that highlights your qualifications for a job. It showcases your most important credentials. The person reviewing your resume will be able to view your most important attributes at a glance.",
  },
  {
    id: v4(),
    componentName: "contact",
    sectionHeadline: "Contact",
    isVisible: true,
    canToggle: true,
    placement: "main",
    side: "left",
    data: [
      {
        socialPlatform: "mail",
        value: "Your@email.com",
        placeholder: "Email",
      },
      {
        socialPlatform: "phone",
        value: "1234567890",
        placeholder: "Phone Number",
      },
      {
        socialPlatform: "linkedin",
        value: "",
        placeholder: "Linkedin Username",
        url: "https://www.linkedin.com/in/",
      },
      {
        socialPlatform: "instagram",
        value: "",
        placeholder: "Instagram Username",
        url: "https://www.instagram.com/",
      },
      {
        socialPlatform: "github",
        value: "",
        placeholder: "Github Username",
        url: "https://github.com/",
      },
    ],
  },
  {
    id: v4(),
    componentName: "address",
    sectionHeadline: "Address",
    isVisible: true,
    canToggle: true,
    placement: "main",
    side: "left",
    data: "123 Fake Street, Toronto, Ontario, Canada, M9A4X7",
  },
  {
    id: v4(),
    componentName: "skills",
    sectionHeadline: "Skills",
    isVisible: true,
    canToggle: true,
    placement: "main",
    side: "left",
    data: [
      { id: "Skill 1", text: "Skill 1" },
      { id: "Skill 2", text: "Skill 2" },
      { id: "Skill 3", text: "Skill 3" },
      { id: "Skill 4", text: "Skill 4" },
      { id: "Skill 5", text: "Skill 5" },
      { id: "Skill 6", text: "Skill 6" },
      { id: "Skill 7", text: "Skill 7" },
      { id: "Skill 8", text: "Skill 8" },
      { id: "Skill 9", text: "Skill 9" },
      { id: "Skill 10", text: "Skill 10" },
    ],
  },
  {
    id: v4(),
    componentName: "education",
    sectionHeadline: "Education",
    isVisible: true,
    canToggle: true,
    placement: "main",
    side: "right",
    data: [
      {
        mainTitle: "Your Program Name",
        subTitle: "Your College Name",
        id: v4(),
        details: [],
        startDate: {
          month: "Jan",
          year: 2020,
        },
        endDate: {
          month: "Jan",
          year: 2022,
        },
      },
    ],
  },
  {
    id: v4(),
    componentName: "certifications",
    sectionHeadline: "Certifications",
    isVisible: false,
    canToggle: true,
    placement: "main",
    side: "right",
    data: [
      {
        mainTitle: "Certification Name",
        subTitle: "Institution Name",
        id: v4(),
        details: [],
        startDate: {
          month: "Jan",
          year: 2020,
        },
        endDate: {
          month: "Jan",
          year: 2022,
        },
      },
    ],
  },
];

export let initialThemeState = {
  primaryColor,
  secondaryColor,
  baseFontSize,
  baseFontFamily,
};
