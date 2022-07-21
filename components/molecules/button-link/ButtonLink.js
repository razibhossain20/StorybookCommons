import React from "react";

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
        </div>
    );
};

export default ButtonLink;
