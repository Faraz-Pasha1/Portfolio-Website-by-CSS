

export default function Contact () {
    return (
        <div>
            <div className = "contactIntro">
                <p className = "contact1sttitle">GET</p>
                <p className = "contact1sttitle">In</p>
                <p className = "contact1sttitle">Touch..!</p>
                <p className = "contact1stdesc">If you want to experience with me for any web application.</p>
                <p className = "contact1stdesc">Fill out the form and message me. So i will reply very soon</p>
            </div>

            <div className = "contactFormcontainer">
                <p className = "formTitle">Name</p>
                <input type = "text" id="name" name="name" placeholder = "Enter your name"className = "input"/>
                <br/><br/>

                <p className = "formTitle">Contact No.</p>
                <input type = "number" id="contact" name="contact" placeholder = "Enter your contact no."className = "input"/>
                <br/><br/>

                <p className = "formTitle">Email I.D</p>
                <input type = "string" id="name" name="name" placeholder = "Enter your email i.d"className = "input"/>
                <br/><br/>

                <p className = "formTitle">Message</p>
                <textarea id="message" className = "userMessage" placeholder="Enter your message here.." rows = {5} cols = {60} ></textarea> 

                <button className = "submitButton">Submit</button>
                

            </div>


        </div>
    )
}