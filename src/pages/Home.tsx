import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/codeleap_logo_black 1.svg";
import Button from "../components/Button";
import Input from "../components/Input";
import Modal from "../components/Modal";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";

function Home() {
    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleNetworkClick = () => {
        navigate("/network");
    };

    const logoStyle = {
        display: "flex",
        justifyContent: "center",
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <button
                className="cursor-pointer"
                onClick={isModalOpen ? closeModal : openModal}
                style={{
                    width: "100%",
                    border: "none",
                    backgroundColor: "transparent",
                }}
            >
                <div style={logoStyle}>
                    <img
                        src={logo}
                        alt="logo codeleap"
                        style={{ height: "100vh", width: "50vh" }}
                    />
                </div>
            </button>
            {isModalOpen && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        // backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "white",
                            padding: "24px",
                            borderRadius: "8px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "left",
                            gap: "16px",
                            width: "35%",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px",
                            }}
                        >
                            <div>
                                <Title text="Welcome to CodeLeap network!" />
                            </div>
                            <div>
                                <SubTitle text="This is the content of the modal." />
                            </div>
                            <div>
                                <Input
                                    value={inputValue}
                                    placeHolder="John Doe"
                                    text={false}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div
                                className="flex mt-1 justify-end"
                                style={{
                                    display: "flex",
                                    marginTop: "12px",
                                    justifyContent: "end",
                                }}
                            >
                                <Button
                                    color={!inputValue ? "gray" : "#7695EC"}
                                    disabled={!inputValue}
                                    onClick={handleNetworkClick}
                                    text="ENTER"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
