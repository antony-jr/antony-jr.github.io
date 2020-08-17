import React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
  font-weight: ${(props) => props.fontWeight || ""};
  color: ${(props) => props.fontColor || ""};
  font-size: ${(props) => props.fontSize || ""};
  font-family: ${(props) => props.fontFamily || "Dosis Regular"};

  @media (max-width: 331px) {
    font-size: 0.5rem;
  }

  @media (max-width: 191px) {
    font-size: 0.2rem;
  }
`;

const TypographyH1 = styled.h1`
  font-weight: ${(props) => props.fontWeight || ""};
  color: ${(props) => props.fontColor || ""};
  font-size: ${(props) => props.fontSize || ""};
  font-family: ${(props) => props.fontFamily || "Dosis Regular"};

  @media (max-width: 331px) {
    font-size: 0.8rem;
  }

  @media (max-width: 191px) {
    font-size: 0.5rem;
  }
`;

const TypographyH2 = styled.h2`
  font-weight: ${(props) => props.fontWeight || ""};
  color: ${(props) => props.fontColor || ""};
  font-size: ${(props) => props.fontSize || ""};
  font-family: ${(props) => props.fontFamily || "Dosis Regular"};

  @media (max-width: 331px) {
    font-size: 0.8rem;
  }

  @media (max-width: 191px) {
    font-size: 0.5rem;
  }
`;

const TypographyH3 = styled.h3`
  font-weight: ${(props) => props.fontWeight || ""};
  color: ${(props) => props.fontColor || ""};
  font-size: ${(props) => props.fontSize || ""};
  font-family: ${(props) => props.fontFamily || "Dosis Regular"};

  @media (max-width: 331px) {
    font-size: 0.8rem;
  }

  @media (max-width: 191px) {
    font-size: 0.5rem;
  }
`;

const TypographyH4 = styled.h4`
  font-weight: ${(props) => props.fontWeight || ""};
  color: ${(props) => props.fontColor || ""};
  font-size: ${(props) => props.fontSize || ""};
  font-family: ${(props) => props.fontFamily || "Dosis Regular"};

  @media (max-width: 331px) {
    font-size: 0.8rem;
  }

  @media (max-width: 191px) {
    font-size: 0.5rem;
  }
`;

const TypographyH5 = styled.h5`
  font-weight: ${(props) => props.fontWeight || ""};
  color: ${(props) => props.fontColor || ""};
  font-size: ${(props) => props.fontSize || ""};
  font-family: ${(props) => props.fontFamily || "Dosis Regular"};

  @media (max-width: 331px) {
    font-size: 0.8rem;
  }

  @media (max-width: 191px) {
    font-size: 0.5rem;
  }
`;

const TypographyH6 = styled.h6`
  font-weight: ${(props) => props.fontWeight || ""};
  color: ${(props) => props.fontColor || ""};
  font-size: ${(props) => props.fontSize || ""};
  font-family: ${(props) => props.fontFamily || "Dosis Regular"};

  @media (max-width: 331px) {
    font-size: 0.8rem;
  }

  @media (max-width: 191px) {
    font-size: 0.5rem;
  }
`;

function Typography(props) {
  var comp_type = null;
  var fontFamily = null;
  var fontSize = null;
  var fontWeight = null;
  var color = "";

  if (typeof props.weight != "undefined") {
    fontWeight = props.weight.toString().toLowerCase();
  }

  if (typeof props.type == "undefined") {
    comp_type = "h1";
  } else {
    comp_type = props.type.toString().toLowerCase();
  }

  if (typeof props.font == "undefined") {
    fontFamily = "Dosis Regular";
  } else {
    fontFamily = props.font.toString().toLowerCase();
  }

  if (typeof props.size == "undefined") {
    fontSize = "";
  } else {
    fontSize = props.size.toString().toLowerCase();
  }

  if (typeof props.color != "undefined") {
    color = props.color.toString().toLowerCase();
  }

  if (comp_type == "h1") {
    return (
      <TypographyH1
        fontWeight={fontWeight}
        fontColor={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
      >
        {props.children}{" "}
      </TypographyH1>
    );
  } else if (comp_type == "h2") {
    return (
      <TypographyH2
        fontWeight={fontWeight}
        fontColor={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
      >
        {props.children}{" "}
      </TypographyH2>
    );
  } else if (comp_type == "h3") {
    return (
      <TypographyH3
        fontWeight={fontWeight}
        fontColor={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
      >
        {props.children}{" "}
      </TypographyH3>
    );
  } else if (comp_type == "h4") {
    return (
      <TypographyH4
        fontWeight={fontWeight}
        fontColor={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
      >
        {props.children}{" "}
      </TypographyH4>
    );
  } else if (comp_type == "h5") {
    return (
      <TypographyH5
        fontWeight={fontWeight}
        fontColor={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
      >
        {props.children}{" "}
      </TypographyH5>
    );
  } else if (comp_type == "h6") {
    return (
      <TypographyH6
        fontWeight={fontWeight}
        fontColor={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
      >
        {props.children}{" "}
      </TypographyH6>
    );
  } else if (comp_type == "p") {
    return (
      <Paragraph
        fontWeight={fontWeight}
        fontColor={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
      >
        {props.children}{" "}
      </Paragraph>
    );
  } else {
    return (
      <TypographyH1
        fontWeight={fontWeight}
        fontColor={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
      >
        {props.children}{" "}
      </TypographyH1>
    );
  }
}

export default Typography;
