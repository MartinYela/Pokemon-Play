import { useState, ChangeEvent } from "react";

type FormValues = { [key: string]: string };

export const useForm = (initialState: FormValues = {}) => {
  const [values, setValues] = useState<FormValues>(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return [values, handleInputChange, reset] as const;
};
