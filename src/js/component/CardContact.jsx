import React from "react";
import { Link } from "react-router-dom";


export const CardContact = () => {
    return (
        <div className="p-3">
            <div className="m-5 d-flex justify-content-end">
				<Link to="/add-contact">
					<button className="btn btn-success">Add New Contact</button>
				</Link>
			</div>
            <div className="border rounded m-5 d-flex p-1">
                <div className="p-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" className="img-fluid rounded-start p-3 ms-4" style={{ width: "150px", height: "150px" }} alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="title">Mike Anamendolla</h5>
                    <p className="text-secondary"><i className="fas fa-map-marker-alt me-3 mt-2"></i>5842 Hillcrest RD</p>
                    <p className="text-secondary"><i className="fas fa-phone me-3"></i>(870) 288-4149</p>
                    <p className="text-secondary"><i class="fas fa-envelope me-3"></i>mike.ana@example.com</p>
                </div>
                <div className="m-3 p-2">
                    <i className="fas fa-pencil-alt me-5"></i>
                    <i className="fas fa-trash-alt me-5"></i>
                </div>
            </div>

        </div>
    );
};