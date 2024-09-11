import {
    useState
} from "react";
import Request from "./Request";

const config = require("../configs/config.json");


export const useApi = () => {
    const [result, setResult] = useState(null);

    const getActiveProject = async () => {
        const response = await Request("get", `${config.api.invokeUrl}/project/active/`);
        setResult(response);
    };

    const getProjectById = async (projectId) => {
        const response = await Request("get", `${config.api.invokeUrl}/project/detail/${projectId}`);
        setResult(response);
    };


    const handleChange = async (type, data) => {
        if (type === "getActiveProject") {
            await getActiveProject();

        } else  if (type === "getProjectById") {
            await getProjectById(data);

        }

    };


    return [result, handleChange];
};