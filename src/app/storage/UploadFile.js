import {useEffect, useState} from "react";
import {useApi} from "../../service/useApi";

export default function UploadFile (){
    const [fileUploadStatus, setFileUploadStatus] = useState(null);
    const [uploadedFile, setUploadedFile] = useApi(null);
    const [selectedFile, setSelectedFile] = useState(null);


    const handleSendSingleFileUpload = async (file) => {
        setFileUploadStatus("UPLOADING");
        const formData = new FormData();
        formData.append("documentType", "PDF");
        formData.append("applicationId", `123123123`);
        formData.append("file", file);
        setUploadedFile("uploadApplicationFile", formData).then(r => null)
        setFileUploadStatus("UPLOADED");
        setSelectedFile(null)
    }

    useEffect(() => {
        if(uploadedFile){
            setFileUploadStatus("UPLOADED");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uploadedFile]);

    const handleOnChange = (type, value) => {
        setSelectedFile(value[0]);
    };

    const handleOnClick = (e) => {
        if(selectedFile){
            handleSendSingleFileUpload(selectedFile).then(r => null);
        }

    };


    return(
        <><input type="file" id="myfile" name="myfile"
                 onChange={(event) => {
                     handleOnChange("uploadFile", {
                         ...event.target.files,
                     });
                 }}/>
        <button onClick={handleOnClick}>KAYDET</button>
        </>
    )
}