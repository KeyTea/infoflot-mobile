import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions, Modal,
} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {selectCruise} from "../store/cruiseReducer";

type Props = {
    error: Error | null
}

export const ConfirmationDialog: React.FC<Props> = ({error}) => {

    const title: string = "Что-то пошло не так";
    const cruise = useAppSelector(selectCruise);
    const dispatch = useAppDispatch();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (error) {
            setOpen(true);
        }
    }, [error]);

    return (
        <>
            <Dialog open={open}>
                <DialogTitle style={{color: 'red'}}>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText color="secondary">{error?.message}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={() => {
                        setOpen(false);
                    }}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
