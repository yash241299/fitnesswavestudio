import "./Label.scss";

export const Label = ({ labelFor, labelText }) => {
  return (
    <label htmlFor={labelFor} className="form-group__label">
      {labelText}
    </label>
  );
};
