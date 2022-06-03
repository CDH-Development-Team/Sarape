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
        <InfoRow imgStart={imgStart} style={{overflow: 'visible', marginTop:"-4rem"}}>
          <Column1 style={{ marginLeft: "3rem", width: "100%", overflow: "visible"}}>
            <ImgWrap style={{overflow: 'visible'}}>
              <React.Fragment style={{overflow: "visible"}}>
                <a href={link} target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                  <Heading lightText={lightText} style={{ fontSize: "2.5rem", marginLeft:"25rem",  marginTop:"1rem", width: "100%"}}>
                    {headline}
                  </Heading>
                <Img src={img} alt={alt} style={{width:"70%"}}/>
                </a>
              </React.Fragment>
            </ImgWrap>
          </Column1>
        </InfoRow>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
