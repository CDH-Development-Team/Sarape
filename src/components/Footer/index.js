import React from "react";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLink,
  FooterLinkItems,
} from "./footerElements";

const Footer = () => {

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLink to="/intro">Introduction</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLink to="/geography">History and Geography</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLink to="/porfirio">Porfirio Gutiérrez</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLink to="/section5Family">
                  Family and Philosophy
                </FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLink to="/dyeing">Natural Dyeing</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLink to="/historicalTextiles">
                  Historical Textiles
                </FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLink to="/section7">Saltillo Influences</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLink to="/tourism">Tourism</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLink to="/media">Films<br/>Games<br/>More</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};
export default Footer;
