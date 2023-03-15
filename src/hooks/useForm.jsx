import { useState } from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
    message: "Preencha um email válido",
  },
};

export default function useForm(type) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const validate = (value) => {
    if(type === false) return true;
    if(value.length === 0) {
      setError('Preencha um valor.')
      return false
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
    } else {
      setError(null);
      return true
    }

  }

  const onChange = ({ target }) => {
    if(error) validate(target.value);
    setValue(target.value);
  };

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
}
