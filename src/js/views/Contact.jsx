import React, { useContext } from "react";
import { CardContact } from "../component/CardContact.jsx";
import { Context } from "../store/appContext.js";
import { useActionData } from "react-router";


export const Contact = () => {
    const { store, actions } = useContext(Context)

    return (
        <div className="container">
            <ul>
                {store.users.map((user) => 
            <CardContact key={user.id} name={user.full_name} address={user.address} phone={user.phone} email={user.email} id={user.id} /> 
            )}
            </ul>
        </div>
    )
}