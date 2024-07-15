"use client";

import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;
const CustomFromProvider = ({
  onSubmit,
  children,
  defaultValues,
  resolver,
}: TFormProps) => {
const formConfig: TFormConfig = {};

if (defaultValues) {
  formConfig["defaultValues"] = defaultValues;
}
console.log(defaultValues, "defaultValues");
  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  const methods = useForm(formConfig);
  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
  };
  // make sure formState is read before render to enable the Proxy

  return (
    <FormProvider {...methods}>
      <form className="w-full" onSubmit={methods.handleSubmit(submit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default CustomFromProvider;
