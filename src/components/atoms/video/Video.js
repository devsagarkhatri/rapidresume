import React, { useEffect, useRef, useState } from "react";
// import { Cloudinary } from "@cloudinary/url-gen";
import Axios from "axios";

const Video = () => {
    const [videoFile, setVideoFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState(false);

    // const cld = new Cloudinary({
    //     cloud: {
    //         cloudName: "rapid-resume",
    //     },
    // });
    // let cloudinaryRef = useRef();
    // let widgetRef = useRef();
    // useEffect(() => {
    //     cloudinaryRef.current = window.cloudinary;
    //     widgetRef.current = cloudinaryRef.current.createUploadWidget(
    //         {
    //             cloudName: "rapid-resume",
    //             uploadPresent: "rsoky1sw",
    //         },
    //         function (err, res) {
    //             console.log(res);
    //         }
    //     );
    // }, []);
    // function addVideo() {
    //     widgetRef.current.open();
    // }
    function uploadVideo(event) {
        setVideoFile(event.target.files[0]);
    }
    function submitVideo() {
        let formData = new FormData();
        formData.append("file", videoFile);
        formData.append("upload_preset", "rsoky1sw");
        console.log("happening");
        Axios.post(
            "https://api.cloudinary.com/v1_1/rapid-resume/upload",
            formData
        )
            .then((res) => console.log(res))
            .catch((err) => console.log(err));

        setVideoFile(null);
        setUploadStatus(true);
        setTimeout(() => {
            setUploadStatus(false);
        }, 2000);
    }
    return (
        <>
            {uploadStatus ? (
                <div className="fixed h-24 w-96 bg-white top-5 right-5  p-4 rounded-full ">
                    <p className="text-lg text-green">Upload Successful</p>
                </div>
            ) : (
                <div className="fixed flex flex-col justify-center gap-3 items-center h-52 w-96 bg-slate-200 top-5 right-5  p-4 rounded-full ">
                    <input
                        type="file"
                        name="video"
                        accept="video/*"
                        onChange={uploadVideo}
                    />
                    <button
                        className="border-2 p-2 text-white rounded-lg bg-gray"
                        onClick={submitVideo}
                    >
                        {"Upload "}
                    </button>
                </div>
            )}
        </>
    );
};

export default Video;
