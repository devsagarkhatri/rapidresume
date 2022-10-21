import React from "react";
import Background from "../../atoms/background/Background";
import Header from "../../atoms/header/Header";
import Page from "../../atoms/page/Page";
import { useParams } from "react-router-dom";

const SharedResume = ({ users }) => {
    let { id } = useParams();
    let user;
    for (let u = 0; u < users.length; u++) {
        if (users[u].id === id) {
            user = users[u];
        }
    }
    return (
        <div>
            {user ? (
                <>
                    {/* This is the sharable link and  Here the data can't be edited Maybe create a new component to diplay this data.  */}
                    <Background isCircle={false} isgradient={true} />
                    <Page />
                </>
            ) : (
                <>
                    <Background />
                    <h2> ⚠ User Not Found</h2>
                </>
            )}
        </div>
    );
};

export default SharedResume;
