const baseURL = "http://localhost:3000/api/";

const [formData, setFormData] = useState({
  name: "",
  surname: "",
  age: "",
});

const createEmployee = async () => {
  try {
    const { name, surname, age } = formData;
    // Validate input
    if (!name || !surname || !age) {
      closeModal();
      Swal.fire("Error", "Please fill in all fields", "error");
      return;
    }
    if (age <= 0) {
      Swal.fire("Error", "age must be more than 0", "error");
      return;
    }

    await axios.post(`${baseURL}/employee`, {
      name: formData.name,
      surname: formData.surname,
      age: formData.age,
    });

    Swal.fire("Success", "Data submitted successfully", "success");
  } catch (err) {
    Swal.fire("Error", `${err.response.data.message}`, "error");
  }
};
