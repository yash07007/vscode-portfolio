import { useState } from "react";
import { getContacts } from "./api/contact";
import ContactCode from "../components/ContactCode";
import styles from "../styles/ContactPage.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = ({ contactItems }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const submitForm = async (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:yashsolanki777@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
        window.open(mailtoLink);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        toast.success("Opening your email client!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className={styles.container}>
                <div>
                    <h3 className={styles.heading}>Reach Out Via Socials</h3>
                    <ContactCode contactItems={contactItems} />
                </div>
                <div>
                    <h3 className={styles.heading}>Or Fill Out This Form</h3>
                    <form className={styles.form} onSubmit={submitForm}>
                        <div className={styles.flex}>
                            <div>
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="name">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows="5"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export async function getStaticProps() {
    const contactItems = getContacts();
    return {
        props: { title: "Contact", contactItems },
    };
}

export default ContactPage;
