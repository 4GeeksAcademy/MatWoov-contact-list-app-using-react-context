import React from "react";
import { Link } from "react-router-dom";


export const AddContact = () => {
    return (
        <div>
            <h1 className="text-center p-5 mb-0">Add New Contact</h1>
            <form className="p-5">
                <div className="mb-3">
                    <label htmlFor="exampleInputFullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="exampleInputFullName" placeholder="Full Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Mail" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="exampleInputPhone" placeholder="Enter Phone" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="exampleInputAddress" placeholder="Enter Address" />
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="button">Save</button>
                </div>
            </form>
            <div>
                <Link to="/">
                    <span className="btn btn-warning ms-5" href="#" role="button">
                        Back home
                    </span>
                </Link>
            </div>
        </div>
    )
};