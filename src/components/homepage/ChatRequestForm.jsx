import { useState } from "react";
import "../../App.css";
import "./Chatform.css";

export const ChatRequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    tob: "",
    pob: "",
    maritalStatus: "",
    gender: "",
    topic: "",
    occupation: "",
    partnerDetails: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // you can call API here
  };

  return (
    <div
      className="modal fade full-screen"
      id="chatModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-xl formWrapper">
        <div className="modal-content chat-request-modal">
          <div className="modal-header border-0">
            <h5 className="modal-title">Request chat to astrologer</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <form onSubmit={handleSubmit} className="chat-request-form">
            <div className="row">
              {/* Name */}
              <div className="col-lg-4 col-md-6">
                <label className="form-label">
                  Name <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>

              {/* Date of Birth */}
              <div className="col-lg-4 col-md-6">
                <label className="form-label">
                  Date Of Birth <span>*</span>
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Time of Birth */}
              <div className="col-lg-4 col-md-6">
                <label className="form-label">
                  Time Of Birth <span>*</span>
                </label>
                <input
                  type="time"
                  className="form-control"
                  name="tob"
                  value={formData.tob}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Place of Birth */}
              <div className="col-lg-4 col-md-6">
                <label className="form-label">
                  Place Of Birth <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="pob"
                  value={formData.pob}
                  placeholder="Place of Birth"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Marital Status */}
              <div className="col-lg-4 col-md-6">
                <label className="form-label">
                  Marital Status <span>*</span>
                </label>
                <select
                  className="form-select"
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option>Single</option>
                  <option>Married</option>
                  <option>Divorced</option>
                  <option>Widowed</option>
                </select>
              </div>

              {/* Gender */}
              <div className="col-lg-4 col-md-6">
                <label className="form-label d-block">
                  Gender <span>*</span>
                </label>
                <div className="gender-radio-btn">
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="gender"
                      value="Male"
                      checked={formData.gender === "Male"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="gender"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">Female</label>
                  </div>
                </div>
              </div>

              {/* Topic of Concern */}
              <div className="col-lg-4 col-md-6">
                <label className="form-label">
                  Topic of concern <span>*</span>
                </label>
                <select
                  className="form-select"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Topic of concern</option>
                  <option>Career</option>
                  <option>Marriage</option>
                  <option>Health</option>
                  <option>Finance</option>
                </select>
              </div>

              {/* Occupation */}
              <div className="col-lg-4 col-md-6">
                <label className="form-label">
                  Select Your Occupation <span>*</span>
                </label>
                <select
                  className="form-select"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Your Occupation</option>
                  <option>Student</option>
                  <option>Business</option>
                  <option>Service</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Partner details checkbox */}
              <div className="col-12">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input partner-check"
                    name="partnerDetails"
                    checked={formData.partnerDetails}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">
                    Enter Partner's Details
                  </label>
                </div>
              </div>
            </div>

            {/* Submit button */}
            <div className="initiate-chat">
              <button type="submit">Start chat With Renu</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
