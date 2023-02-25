import initialState from "./state";
import { createContext } from "react";

const ApplicationCtx = createContext(initialState);

export default ApplicationCtx;
