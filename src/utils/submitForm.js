import Swal from "sweetalert2";


const handleSubmit = async (e) => {
  e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const errorElement = document.getElementById("form-error");
    if (errorElement) errorElement.textContent = "";

    const fullname = formData.get("fullname")?.trim();
    const email = formData.get("email")?.trim();
    const course = formData.get("course")?.trim();
    const student = formData.get("student")?.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z\s]{2,}$/;

    // Validation logic
    if (!fullname || !nameRegex.test(fullname)) { errorElement.textContent = "Please enter a valid full name (only letters)."; return; }

    if (!email || !emailRegex.test(email)) { errorElement.textContent = "Please enter a valid email address."; return; }

    if (!course || course === "0") { errorElement.textContent = "Please select a course."; return; }

    if (!student || (student !== "Yes" && student !== "No")) { errorElement.textContent = "Please confirm whether you are a student."; return; }

    
    const payload = new URLSearchParams();
    payload.append("entry.1656705019", formData.get("fullname"));
    payload.append("entry.118183025", formData.get("email"));
    payload.append("entry.60998376", formData.get("course"));
    payload.append("entry.1976947097", formData.get("student"));

    Swal.fire({ title: 'Submitting...', text: 'Please wait while we process your request.', allowOutsideClick: false, didOpen: () => { Swal.showLoading(); } });

    try {
        const response = await fetch( "https://docs.google.com/forms/d/e/1FAIpQLSfIbFWxx1WyFFd-urk_DsugqnoR3GM-VK9TSML7SxmAg1bOPA/formResponse", {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: payload.toString(), }
        );

        console.log(response);
        Swal.fire({ icon: "success", title: "Submitted!", text: "Your information has been successfully received, We'll be in touch :)", });

        form.reset();

    } catch (error) {
        Swal.fire({ icon: "error", title: "Oops!", text: "Something went wrong. Please try again later.", });
        console.error(error);
    }

};




export default handleSubmit;