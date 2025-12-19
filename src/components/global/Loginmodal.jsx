import { useState } from "react";
import styles from "./Loginmodal.module.css";
import "../../App.css";

export const Loginmodal = () => {
  const [showOtp, setShowOtp] = useState(false); // controls which step is visible
  const [mobile, setMobile] = useState(""); // stores mobile number
  const [otp, setOtp] = useState(["", "", "", ""]); // 4 inputs for OTP

  // Handle Get OTP
  const handleGetOtp = () => {
    const mob = mobile.replace(/[^0-9]/g, "").slice(0, 10);
    if (mob.length === 10) {
      setMobile(mob);
      setShowOtp(true);
    } else {
      alert("Please enter a valid 10-digit number");
    }
  };

  // Handle Edit
  const handleEdit = () => {
    setShowOtp(false);
    setOtp(["", "", "", ""]); // reset OTP
  };

  // Handle OTP input change
  const handleOtpChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  // Verify OTP
  const handleVerifyOtp = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length === 4) {
      alert(`Verifying OTP: ${enteredOtp}`);
      // call your API to verify OTP here
    } else {
      alert("Please enter all 4 digits of the OTP");
    }
  };

  return (
    <div
      className="modal fade full-screen"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div
        className={`modal-dialog modal-dialog-centered modal-lg ${styles["modal-m-0"]}`}
      >
        <div className={`modal-content ${styles["login-modal"]}`}>
          <button
            type="button"
            className={`btn-close ${styles["cross-btn"]}`}
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>

          <div className="modal-body">
            <div className={styles["login-popup"]}>
              <div className="row">
                <div
                  className={`col-lg-6 col-md-6 col-sm-12 ${styles["mob-none"]}`}
                >
                  <div className={styles["left-login-div"]}>
                    <div className={styles["ganesha-img-div"]}>
                      <img
                        src="/ganesha-img.jpeg"
                        alt="Ganesha"
                        width="200"
                        height="400"
                      />
                    </div>
                    <div className={styles["content-bg-layer"]}>
                      <div className={styles["login-content"]}>
                        <p>Free chat Exclusively available On App</p>
                        <span>Download our App now!</span>
                        <a href="">
                          <img
                            src="https://d2vlk40wphb5v6.cloudfront.net/public/frontend/img/playstore.png"
                            alt="Playstore"
                            width="100"
                            height="100"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side */}
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className={styles["right-login-div"]}>
                    {/* Step 1: Enter mobile */}
                    {!showOtp && (
                      <div className={styles["get-otp"]}>
                        <h3>Login</h3>
                        <label htmlFor="mob">Enter your mobile number</label>
                        <div className={styles["mob-number-input"]}>
                          <select>
                            <option value="91">+91 IN</option>
                            <option value="92">+92 AF</option>
                            <option value="93">+93 SH</option>
                            <option value="94">+94 IY</option>
                          </select>
                          <input
                            id="mob"
                            placeholder="Enter your mobile number"
                            type="tel"
                            name="phonenum"
                            maxLength="10"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                          />
                        </div>
                        <span>
                          You will receive a 4 digit code for verification
                        </span>
                        <button onClick={handleGetOtp}>Get OTP</button>
                      </div>
                    )}

                    {/* Step 2: Enter OTP */}
                    {showOtp && (
                      <div className={styles["get-otp"]}>
                        <h3>Enter OTP</h3>
                        <div className={styles["edit-num"]}>
                          <p>
                            OTP has been sent to <span>{mobile}</span>
                          </p>
                          <span className={styles["edit"]} onClick={handleEdit}>
                            Edit
                          </span>
                        </div>
                        <div className={styles["enter-otp"]}>
                          {otp.map((digit, index) => (
                            <input
                              key={index}
                              type="text"
                              maxLength="1"
                              inputMode="numeric"
                              value={digit}
                              onChange={(e) =>
                                handleOtpChange(index, e.target.value)
                              }
                            />
                          ))}
                        </div>
                        <div className={styles["verfy-otp"]}>
                          <button onClick={handleVerifyOtp}>Verify OTP</button>
                          <button onClick={() => setOtp(["", "", "", ""])}>
                            Resend OTP
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
