import React from "react";
import { StyledClassItem } from "./ClassItem.styled";

const ClassItem = (props) => {
    const handleAction = () => {
        props.actionHandler(props.parent_class, props.start_datetime);
    }
    return (
        <StyledClassItem key={props.id}>
            <h3>{props.name}</h3>
            <p>Coach: {props.coach}</p>
            <p>Studio: {props.studio_name}</p>
            <p>Date: {String(new Date(props.start_datetime).toDateString())}</p>
            <p>Time: {String(new Date(props.start_datetime).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })) + 
            " - " + 
            String(new Date(props.end_datetime).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))}</p>
            <p># Ppl. Attending: {props.num_attending}</p>
            <button onClick={handleAction}>{props.action}</button>
        </StyledClassItem>
    );
}

export default ClassItem;