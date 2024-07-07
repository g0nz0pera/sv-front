import { ICard } from "@/interfaces/card";

const getStubData = (): ICard[] => {
  return [
    {
      id: 1,
      title: {
        text: "Understanding needs",
        styles: {
          width: "164px",
          height: "48px",
          fontSize: "1.25rem",
          lineHeight: "1.5rem",
          padding: "2rem 1rem 0 0",
          color: "#ffffff",
        },
      },
      description: {
        text: "We identify who has the problem or need and provide a detailed description of what the problem entails.",
        styles: {
          width: "255px",
          height: "76px",
          color: "#ffffff",
          fontSize: "1rem",
          lineHeight: "1.188rem",
        },
      },
      styles: {
        background: "/images/bg-card-1.svg",
        /* arriba | derecha | abajo | izquierda */
        padding: "2rem 1rem 0 0",
        width: "374px",
        height: "222px",
      },
    },
    {
      id: 2,
      title: {
        text: "Identifying opportunities",
        styles: {
          width: "164px",
          height: "48px",
          fontSize: "1.25rem",
          lineHeight: "1.5rem",
          padding: "2rem 0 0 0 ",
          color: "#ffffff",
        },
      },
      description: {
        text:
          "Lorem Ipsum is simply dummy text" +
          "of the printin and typesetting" +
          "industry. Lorem Ipsum has" +
          "been the industry's standard...",
        styles: {
          width: "268px",
          height: "76px",
          color: "#9A9A9A",
          fontSize: "1rem",
          lineHeight: "1.188rem",
        },
      },
      styles: {
        background: "/images/bg-card-2.svg",
        /* arriba | derecha | abajo | izquierda */
        padding: "2rem 1rem 1rem 1rem",
        width: "374px",
        height: "222px",
      },
    },
    {
      id: 3,
      title: {
        text: "Developing customized solutions",
        styles: {
          width: "258px",
          height: "48px",
          fontSize: "1.25rem",
          lineHeight: "1.5rem",
          color: "#ffffff",
        },
      },
      description: {
        text:
          "Lorem Ipsum is simply dummy text" +
          "of the printin and typesetting" +
          "industry. Lorem Ipsum has" +
          "been the industry's standard...",
        styles: {
          width: "270px",
          height: "76px",
          color: "#9A9A9A",
          fontSize: "1rem",
          lineHeight: "1.188rem",
        },
      },
      styles: {
        background: "/images/bg-card-3.svg",
        /* arriba | derecha | abajo | izquierda */
        padding: "2rem 1rem 1rem 1rem",
        width: "374px",
        height: "222px",
      },
    },
  ];
};

const getProjectStubData = (): ICard => {
  return {
    id: "project-card",
    title: {
      text: "Below are some of the key technologies we use in our projects:",
      styles: {
        width: "396px",
        height: "62px",
        fontSize: "1.25rem",
        lineHeight: "1.5rem",
        color: "#00F4AC",
      },
    },
    styles: {
      background: "/images/bg-project-card.svg",
      /* arriba | derecha | abajo | izquierda */
      padding: "1.75rem 0 0 0",
      width: "512px",
      height: "127px",
    },
  };
};

export const DataService = {
  getStubData,
  getProjectStubData,
};
