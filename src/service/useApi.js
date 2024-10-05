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

    const getSchoolProjectById = async (projectId) => {
        const response = await Request("get", `${config.api.invokeUrl}/school/project/${projectId}`);
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

    const checkSchoolCode = async (code) => {
        const response = await Request("get", `${config.api.invokeUrl}/institution/code/${code}`);
        setResult(response);
    };

    const getSchoolCampusList = async (schoolId) => {
        const response = await Request("get", `${config.api.invokeUrl}/institution/campus/${schoolId}`);
        setResult(response);
    };

    const createUserStudent = async (data) => {
        const response = await Request("post", `${config.api.invokeUrl}/user/`, data);
        setResult(response);
    };

    const findSchoolProjectBySchool = async (schoolId) => {
        const response = await Request("get", `${config.api.invokeUrl}/school/project/school/${schoolId}`);
        setResult(response);
    };

    const studentLogin = async (identityNumber) => {
        const response = await Request("get", `${config.api.invokeUrl}/user/student/login/${identityNumber}`);
        setResult(response);
    };


    const uploadApplicationFile = async (data) => {
        const response = await Request("post", `${config.api.invokeUrl}/storage/upload/file`, data);
        setResult(response);
    };


    const getSchoolProjectCampus = async (data) => {
        const response = await Request("get", `${config.api.invokeUrl}/school/project/campus/${data.projectId}/${data.campusId}`);
        setResult(response);
    };

    const createApplication = async (data) => {
        const response = await Request("post", `${config.api.invokeUrl}/application/`, data);
        setResult(response);
    };
    const getUserApplications = async (data) => {
        const response = await Request("get", `${config.api.invokeUrl}/application/student/${data}`);
        setResult(response);
    };
    const getAgreement = async () => {
        const response = await Request("get", `${config.api.invokeUrl}/institution/agreement/`);
        setResult(response);
    };


    const getApplicationAgreement = async (data) => {
        const response = await Request("get", `${config.api.invokeUrl}/application/agreement/${data}`);
        setResult(response);
    };
    const setApplicationAgreement = async (data) => {
        const response = await Request("get", `${config.api.invokeUrl}/application/agreement/${data.applicationId}/${data.userId}`);
        setResult(response);
    };

    const handleChange = async (type, data) => {
        if (type === "getActiveProject") {
            await getActiveProject();
        }
        else  if (type === "getAgreement") {
            await getAgreement();
        }
        else  if (type === "getApplicationAgreement") {
            await getApplicationAgreement(data);
        }
        else  if (type === "setApplicationAgreement") {
            await setApplicationAgreement(data);
        }

        else  if (type === "getUserApplications") {
            await getUserApplications(data);
        }
        else  if (type === "createApplication") {
            await createApplication(data);
        }
        else  if (type === "getProjectById") {
            await getProjectById(data);
        }
        else  if (type === "getSchoolProjectById") {
            await getSchoolProjectById(data);
        }
        else  if (type === "getSchoolProjectCampus") {
            await getSchoolProjectCampus(data);
        }
        else  if (type === "getSchoolById") {
            await getSchoolById(data);
        }
        else  if (type === "getAllSchools") {
            await getAllSchools();
        }
        else  if (type === "checkSchoolCode") {
            await checkSchoolCode(data);
        }
        else  if (type === "getSchoolCampusList") {
            await getSchoolCampusList(data);
        }
        else  if (type === "createUserStudent") {
            await createUserStudent(data);
        }
        else  if (type === "findSchoolProjectBySchool") {
            await findSchoolProjectBySchool(data);
        }
        else  if (type === "studentLogin") {
            await studentLogin(data);
        }
        else  if (type === "uploadApplicationFile") {
            await uploadApplicationFile(data);
        }
    };

    return [result, handleChange];
};
