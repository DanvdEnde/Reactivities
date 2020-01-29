import React from "react";
import { FieldRenderProps } from "react-final-form";
import { FormFieldProps, Label, Form } from "semantic-ui-react";
import { DateTimePicker } from "react-widgets";

interface IProps extends FieldRenderProps<any, HTMLElement>, FormFieldProps {}

const DateInput: React.FC<IProps> = ({
  input,
  width,
  placeholder,
  meta: { touched, error },
  id,
  ...rest
}) => {
  return (
    <Form.Field error={touched && !!error} width={width}>
      <DateTimePicker
        placeholder={placeholder}
        value={input.value || null}
        onChange={input.onChange}
        {...rest}
      />
      {touched && error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default DateInput;
