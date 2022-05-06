import { CardFilm } from "./styledCard";
import ModalDialog from '../../../components/Modal'
import { useState } from "react";

export const Card = (props) => {
    const [open, setOpen] = useState(false)
    
    return(
        <>
            <ModalDialog
                open={open}
                setOpen={setOpen}
                title={props.title}
                resum={props.resum}
                director={props.director}
                date={props.date}
                producer={props.producer}
            />
            <CardFilm onClick={() => setOpen(true)}>
                <p>{props.title}</p>
            </CardFilm>
        </>

    )
}