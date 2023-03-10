import React from "react";
import { StyledCard } from "./OverlayCard.styled";
import { StyledRow } from "../styles/Row.styled";
import { StyledLink } from "../styles/Link.styled";
import { StyledButton } from "../styles/Button.styled";
import { StyledCloseButton } from "./CloseButton.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faLocationDot,
    faMailBulk,
    faCircleInfo,
    faXmark,
  } from "@fortawesome/free-solid-svg-icons";

// Figure out how to display multiple images (maybe in some )
// Figure out how to display "X" button to close it
// FIgure
const OverlayCard = (props) => {
    return (
        <StyledCard>
            <StyledRow className="close-row">
                <StyledCloseButton className="close-btn" onClick={props.cardCloseHandler}>
                    <FontAwesomeIcon icon={faXmark} />
                </StyledCloseButton>
            </StyledRow>   

            <StyledRow>
                <h2>{props.name}</h2>
            </StyledRow>

            <StyledRow> 
                <img src={props.imageUrl} 
                     alt="man walking down street" 
                     width="100" 
                     height="100"/>
            </StyledRow>

            <StyledRow>
                <FontAwesomeIcon icon={faPhone} fixedWidth />
                <StyledLink>{props.phoneNumber}</StyledLink>
            </StyledRow>

            <StyledRow>
                <FontAwesomeIcon icon={faLocationDot} fixedWidth />
                <StyledLink href={props.directions} target="_blank">{props.address}</StyledLink>
            </StyledRow>

            <StyledRow>
                <FontAwesomeIcon icon={faMailBulk} fixedWidth />
                <StyledLink href="">{props.postalCode}</StyledLink>
            </StyledRow>
            
            <StyledRow>
                <FontAwesomeIcon icon={faCircleInfo} fixedWidth />
                <StyledLink>Amenities</StyledLink>
                <ul>
                    {props.amenities.map(amenity => 
                        <li key={amenity.id}>{amenity.type}</li>)}
                </ul>
            </StyledRow>
            
            <StyledRow>
                <StyledButton onClick={null}>View Class Schedule</StyledButton>
            </StyledRow>
        </StyledCard>
    )
}

export default OverlayCard;