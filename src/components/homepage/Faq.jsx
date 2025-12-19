import "./Faq.css";

export const Faq = () => {
  return (
    <>
      <div className="faq-accordion">
        <div className="container my-4">
          <h4>Frequently Asked Questions</h4>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            {/* Item 1 */}
            <div className="accordion-item faq-accordion-item">
              <h2 className="accordion-header faq-accordion-header">
                <button
                  className="accordion-button faq-accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show faq-accordion-collapse"
                data-bs-parent="#accordionPanelsStayOpenExample"
              >
                <p className="accordion-body faq-accordion-body">
                  The truth behind the accuracy of astrology lies in thousands
                  of years of in-depth study that establishes a connection
                  between planetary movements and human experiences. Expert
                  astrologers offer a specific interpretation by analyzing birth
                  charts that represent cosmic forces at the exact time of your
                  birth, not a generic one that applies to all.
                </p>
              </div>
            </div>

            <div className="accordion-item faq-accordion-item">
              <h2 className="accordion-header faq-accordion-header">
                <button
                  className="accordion-button faq-accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse faq-accordion-collapse"
                data-bs-parent="#accordionPanelsStayOpenExample"
              >
                <p className="accordion-body faq-accordion-body">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Possimus ex atque eligendi praesentium rem porro fuga qui quas
                  sed, non quaerat dolorem soluta exercitationem ullam.
                </p>
              </div>
            </div>

            <div className="accordion-item faq-accordion-item">
              <h2 className="accordion-header faq-accordion-header">
                <button
                  className="accordion-button faq-accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse faq-accordion-collapse"
                data-bs-parent="#accordionPanelsStayOpenExample"
              >
                <p className="accordion-body faq-accordion-body">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Possimus ex atque eligendi praesentium rem porro fuga qui quas
                  sed, non quaerat dolorem soluta exercitationem ullam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
