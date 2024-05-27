import {
  ImAirplane,
  ImHeadphones,
  ImBin,
  ImHtmlFive,
  ImLinkedin,
  ImQrcode,
  ImTerminal,
  ImTux,
  ImWhatsapp,
  ImWindows8,
  ImSteam,
} from "react-icons/im";
import { Section, Div, DivMainBack } from "./style";
import React, { ReactNode } from "react";

interface BackgroundPageProps {
  children?: ReactNode;
}

export function Background_page({ children }: BackgroundPageProps) {
  const icons = [
    <ImAirplane key="ImAirplane" />,
    <ImBin key="ImBin" />,
    <ImHeadphones key="ImHeadphones" />,
    <ImHtmlFive key="ImHtmlFive" />,
    <ImLinkedin key="ImLinkedin" />,
    <ImQrcode key="ImQrcode" />,
    <ImTerminal key="ImTerminal" />,
    <ImAirplane key="ImAirplane" />,
    <ImBin key="ImBin" />,
    <ImTux key="ImTux" />,
    <ImWhatsapp key="ImWhatsapp" />,
    <ImWindows8 key="ImWindows8" />,
    <ImSteam key="ImSteam" />,
  ];
  const repeatedDivs = new Array(50).fill(null);
  return (
    <Section>
      <div
        style={{
          position: "absolute",
        }}
      >
        {children}
      </div>
      {repeatedDivs.map((_, index) => (
        <DivMainBack key={index}>
          <Div key={index}>
            {icons.map((icon) => React.cloneElement(icon))}
            {icons.map((icon) => React.cloneElement(icon))}
            {icons.map((icon) => React.cloneElement(icon))}
            {icons.map((icon) => React.cloneElement(icon))}
            {icons.map((icon) => React.cloneElement(icon))}
          </Div>
        </DivMainBack>
      ))}
    </Section>
  );
}
