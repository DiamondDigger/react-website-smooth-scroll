import React from 'react'
import { Button } from 'react-scroll'

const InfoSection = () => {
    return (
        <>
          <InfoContainer>
              <InfoWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>Topline</TopLine>
                            <Heading>Heading</Heading>
                            <Subtitle>Subtitle</Subtitle>
                            <BtnWrapper>
                                <Button to='home'>Button</Button>
                            </BtnWrapper>
                        </TextWrapper>
                    </Column1>
                </InfoRow>
              </InfoWrapper>
              </InfoContainer>  
        </>
    )
}

export default InfoSection
