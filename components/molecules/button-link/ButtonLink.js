import React from "react";
import PropTypes from "prop-types";
import HtmlComment from "../../particles/html-comment/HtmlComment";

const ButtonLink = (props) => {
    const {
        modalTarget,
        enableModal,
        buttonlink_target,
        button_type,
        buttonlink_href,
        buttonlink_title,
        button_styles,
        button_textColor,
        button_width,
    } = props;

    return (
        <div className="button-link section">
            <HtmlComment text="Start button-link component markup, Copy from here" />

            {
                // check is not modal enable then return first otherwise second
                !enableModal ? (
                    <a
                        className={`btn ${
                            button_styles ? "btn-" + button_styles : ""
                        } ${button_textColor || ""}  ${button_width || ""}`}
                        data-type={button_type || ""}
                        href={buttonlink_href || ""}
                        target={buttonlink_target || ""}
                        title={buttonlink_title || ""}
                        role="button"
                    >
                        {button_type === "line" ? (
                            <span>{props.btn_text || ""}</span>
                        ) : button_type === "arrowRight" ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="#050D1F"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M.75 12h22.5M12.75 22.5L23.25 12 12.75 1.5"
                                />
                            </svg>
                        ) : button_type === "arrowLeft" ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="#050D1F"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M.75 12h22.5M12.75 22.5L23.25 12 12.75 1.5"
                                    style={{
                                        transform: "rotate(180deg)",
                                        transformOrigin: "unset",
                                    }}
                                />
                            </svg>
                        ) : (
                            props.btn_text || ""
                        )}
                    </a>
                ) : (
                    // when modal enable just replace target to data-toggle and data-target poperty
                    <a
                        className={`btn ${
                            button_styles ? "btn-" + button_styles : ""
                        } ${button_textColor || ""}  ${button_width || ""}`}
                        data-type={button_type || ""}
                        href={modalTarget ? "#" + modalTarget : ""}
                        title={buttonlink_title || ""}
                        role="button"
                        data-toggle="modal"
                        data-target={modalTarget ? "#" + modalTarget : ""}
                    >
                        {button_type == "line" ? (
                            <span>{props.btn_text || ""}</span>
                        ) : (
                            props.btn_text || ""
                        )}
                    </a>
                )
            }

            <HtmlComment text="End button-link component markup" />
        </div>
    );
};

ButtonLink.propTypes = {
    /**
     * Several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.
     */
    button_styles: PropTypes.string.isRequired,

    /**
     * Fancy larger or smaller buttons? Add .w-100 for full width or .w-50 for half width.
     */
    button_width: PropTypes.string,

    /**
     * Several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.
     */
    button_type: PropTypes.string,

    /**
     * Defines a hyperlink, which is used to link from one page to another.
     */
    buttonlink_href: PropTypes.string.isRequired,

    /**
     * Specifies where to open the linked document.
     */
    buttonlink_target: PropTypes.string,

    /**
     * The title specifies extra information about an element. The information is most often shown as a tooltip text when the mouse moves over the element.
     */
    buttonlink_title: PropTypes.string,

    /**
     * The btn text  specifies  information about an button link. The information is shown inside the button.
     */
    btn_text: PropTypes.string,

    /**
     * The button text color  specifies font color inside button.
     */
    button_textColor: PropTypes.string,

    /**
     * The button enable to toggle modal target element.
     */
    enableModal: PropTypes.bool,

    /**
     * The button enable to toggle modal target element. Require when *Enable Modal* is true.
     */
    modalTarget: PropTypes.string,
};

export default ButtonLink;
