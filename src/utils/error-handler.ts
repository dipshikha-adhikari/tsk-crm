import { toast } from "react-hot-toast";

export const errorHandler = (error: any, defaultMessage = "Something went wrong") => {
    const message = error?.message || defaultMessage;
    toast.error(message);
};
