import { enqueueSnackbar } from "notistack";

export const showError = (errorMessage: string) => {
    enqueueSnackbar(
        errorMessage, 
        { 
            variant: "error",
            anchorOrigin: { horizontal: "right", vertical: "top"}
        }
    );
}