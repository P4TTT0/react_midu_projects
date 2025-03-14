import { enqueueSnackbar } from "notistack";

export const showError = (errorMessage: string) => {
    console.log("error111");
    enqueueSnackbar(
        errorMessage, 
        { 
            variant: "error",
            anchorOrigin: { horizontal: "right", vertical: "top"}
        }
    );
}