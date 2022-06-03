import React from "react";
import {
  InfoContainer,
  InfoRow,
  Column1,
  Heading,
  ImgWrap,
  Img,
} from "./infoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  lightText,
  headline,
  img,
  alt,
  link
}) => {
  // const [setOpen] = useState(false)
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoRow imgStart={imgStart}>
          <Column1 style={{ marginLeft: "3rem", width: "85%", overflow: "hidden"}}>
            <React.Fragment>
              <a href={link} target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                <Heading lightText={lightText} style={{ fontSize: "2.5rem", marginLeft:"50%",  marginTop:"5rem" }}>
                  {headline}
                </Heading>
              </a>
            </React.Fragment>
            <ImgWrap>
                  <Img src={img} alt={alt}/>
            </ImgWrap>
          </Column1>
        </InfoRow>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
