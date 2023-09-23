import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";


export const AddContact = () => {
    const { store, actions } = useContext(Context)

    const addContact = () => {
        console.log('Ejecuto Bton');
        const user= {
            full_name: "Pedro",
            email: "pedro@gmail.com",
            agenda_slug: "agenda_matwoo",
            address:"47568 NW 34ST, 33434 FL, Miami",
            phone:"7864445566"
        }
        actions.addContact(user);
      }


    return (
        <div>
            <h1 className="text-center p-5 mb-0">Add New Contact</h1>
            <form className="p-5">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input name="name" type="text" className="form-control" placeholder="Full Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input name="email" type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter Mail" />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input name="phone" type="text" className="form-control" placeholder="Enter Phone" />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input name="address" type="text" className="form-control" placeholder="Enter Address" />
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" onClick={addContact} type="button">Save</button>
                </div>
            </form>
        </div>
    )
};