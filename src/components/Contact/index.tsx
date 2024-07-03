import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import styles from "./contact.module.css";
import { ControlledInput, ControlledTextarea } from "@/ui/inputs";
import Button from "@/ui/buttons";

export type ContactInputs = {
  name: string;
  mail: string;
  message: string;
};

export default function Contact() {
  const {
    control,
    reset,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ContactInputs>({
    defaultValues: {
      name: "",
      mail: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactInputs> = async (data: FieldValues) => {
    // simulating fetching data
    try {
      console.log("data: ", data);
      await new Promise((resolve) => setTimeout(resolve, 5000));
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      reset();
    }
  };

  return (
    <section className={styles.main} id="contact">
      <h2>Contact</h2>
      <form>
        <ControlledInput
          error={errors.name?.message}
          name="name"
          control={control}
          rules={{ required: "Name is required" }}
          placeholder="Name"
          icon="user"></ControlledInput>
        <ControlledInput
          error={errors.mail?.message}
          name="mail"
          control={control}
          rules={{ required: "Mail is required" }}
          placeholder="Mail"
          icon="mail"></ControlledInput>
        <ControlledTextarea
          error={errors.message?.message}
          name="message"
          control={control}
          rules={{ required: "Message is required" }}
          placeholder="Message"
          icon="message"></ControlledTextarea>
      </form>
      <Button onClick={handleSubmit(onSubmit)} isLoading={isSubmitting}>
        Send
      </Button>
    </section>
  );
}
