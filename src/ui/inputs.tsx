import { Control, Controller, FieldValue } from "react-hook-form";
import styles from "./ui.module.css";
import { ICONS_DICTIONARY } from "@/utils/dictionaries";
import { IconType } from "@/utils/types";
import { ContactInputs } from "@/components/Contact";

interface InputProps {
  placeholder: string;
  onChange?: (e: any) => void;
  value?: string;
  icon: IconType;
  error: string | undefined;
}

interface ControlledInputProps extends InputProps {
  name: string;
  control: Control<any, any>;
  rules: any;
}

export function ControlledInput({
  name,
  placeholder,
  control,
  rules,
  error,
  icon,
}: ControlledInputProps) {
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field }) => {
        return (
          <InputWithIcon
            {...field}
            icon={icon}
            error={error}
            placeholder={placeholder}
          />
        );
      }}
    />
  );
}
export function ControlledTextarea({
  name,
  placeholder,
  control,
  rules,
  error,
  icon,
}: any) {
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field }) => {
        return (
          <TextareaWithIcon
            {...field}
            icon={icon}
            error={error}
            placeholder={placeholder}
          />
        );
      }}
    />
  );
}

function InputWithIcon({
  placeholder,
  onChange,
  value,
  icon,
  error,
}: InputProps) {
  return (
    <div className={styles.input_container}>
      <div className={styles.input_icon_container}>
        <div className={styles.icon_container}>{ICONS_DICTIONARY[icon]}</div>

        <input
          className={styles.input}
          value={value}
          onChange={onChange}
          placeholder={placeholder}></input>
      </div>
      <p className={styles.input_error}>{error}</p>
    </div>
  );
}
function TextareaWithIcon({
  placeholder,
  onChange,
  value,
  icon,
  error,
}: InputProps) {
  return (
    <div className={styles.textarea_container}>
      <div className={styles.input_icon_container}>
        <div className={styles.icon_container}>{ICONS_DICTIONARY[icon]}</div>

        <textarea
          className={styles.textarea}
          rows={4}
          value={value}
          onChange={onChange}
          placeholder={placeholder}></textarea>
      </div>
      <p className={styles.input_error}>{error}</p>
    </div>
  );
}
