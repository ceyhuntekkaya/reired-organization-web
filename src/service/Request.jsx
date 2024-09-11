/* eslint-disable no-unused-vars */
import axios from "axios";

export default async function Request(method, url, body) {
    const user = JSON.parse(localStorage.getItem("user"));

    const config = null

    const config33 = {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            Authorization: `Bearer ${user && user.access_token ? user.access_token : null}`,
        },
    };

    if (method === "get") {
        try {
            console.log("get", url)
            const res = await axios.get(url, config);
            return res.data;
        } catch (err) {
            return `Error: ${err}`;
        }
    } else if (method === "patch") {
        try {
            console.log("patch", url, body)
            const res = await axios.patch(url, body, config);
            return res.data;
        } catch (err) {
            return `Error: ${err}`;
        }
    } else if (method === "delete") {
        try {
            console.log("delete", url)
            const res = await axios.delete(url, config);
            return res.data;
        } catch (err) {
            return `Error: ${err}`;
        }
    } else if (method === "post") {
        try {
            console.log("post", url, body)
            const res = await axios.post(url, body, config);
            return res.data;
        } catch (err) {
            return `Error: ${err}`;
        }
    } else if (method === "put") {
        try {
            console.log("put", url, body)
            const res = await axios.put(url, body, config);
            return res.data;
        } catch (err) {
            return `Error: ${err}`;
        }
    }
};