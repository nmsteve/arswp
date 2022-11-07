import { React, useState } from "react";

const TokenType = ({ formData, setFormData, page, setPage }) => {

    const [selected, setSelected] = useState("");
    const handleChange = (value) => {
        setSelected(value);
        setFormData({ ...formData, tokenType: value })
        console.log(value)
    };
    return (
        <>
            <div className="form_section_radio">
                <div className="inner_form_seting">
                    <form>
                        <p>Choose Token Type</p>
                        <div
                            id="standard"
                            class="label fl-left "
                            onClick={(e) => {
                                e.preventDefault();
                                handleChange(e.currentTarget.id);
                                console.log(e.currentTarget.id)
                            }}>
                            <label for="html" className="fl-left">
                                Standard
                            </label>
                            <br />
                        </div>
                        <div
                            id='reward'
                            class="label fl-right"
                            onClick={(e) => {
                                e.preventDefault();
                                handleChange(e.currentTarget.id);
                                console.log(e.currentTarget.id)
                            }}>
                            {" "}
                            <label for="html" className="fl-left">
                                Reward
                            </label>
                            <br />
                        </div>
                    </form>

                    <div className="clear"></div>{
                        selected === "standard" ?
                            <div className="L_app5_section_points">
                                <ul>
                                    <li>Best for token Holding.</li>
                                    <li>More safer and less volatile</li>
                                </ul>
                            </div>
                            : selected === "reward" ?
                                <div className="L_app5_section_points">
                                    <ul>
                                        <li>Best for tokens with rewards.</li>
                                        <li>Withdraw rewards anytime.</li>
                                    </ul>
                                </div>
                                :
                                <div className="L_app5_section_points">
                                    <ul>
                                        Choose token type
                                    </ul>
                                </div>
                    }

                    <div className="clear"></div>
                    <div className="app6_form_section_button fl-right">
                        <button onClick={() => {
                            if (selected === "") {
                                alert("Please choose token type")
                            } else
                                setPage((currPage) => currPage + 1);
                        }
                        }>
                            Next
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TokenType;