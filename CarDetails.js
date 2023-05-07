//Exercise useRef - Create a `CarDetails` uncontrolled form
/*
import { useState, useEffect } from 'react';

function CarDetails({ initialData }) {
  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // You can do something with the form data here, like submitting it to a server
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Model:
        <input
          type="text"
          name="model"
          value={formData.model}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Year:
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Color:
        <input
          type="text"
          name="color"
          value={formData.color}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CarDetails;
*/