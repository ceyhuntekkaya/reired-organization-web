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



    const getAllSchools = async () => {
        const response = await Request("get", `${config.api.invokeUrl}/institution/schools/`);
        setResult(response);
    };


    const getSchoolById = async (schoolId) => {
        const response = await Request("get", `${config.api.invokeUrl}/institution/detail/${schoolId}`);
        setResult(response);
    };



    const handleChange = async (type, data) => {
        if (type === "getActiveProject") {
            await getActiveProject();

        } else  if (type === "getProjectById") {
            await getProjectById(data);

        }
        else  if (type === "getSchoolById") {
            await getSchoolById(data);

        }
        else  if (type === "getAllSchools") {
            await getAllSchools();

        }

    };


    return [result, handleChange];
};