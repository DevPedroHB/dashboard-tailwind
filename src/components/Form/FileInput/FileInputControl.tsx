import { ComponentProps } from "react";

interface IFileInputControl extends ComponentProps<"input"> {}

export function FileInputControl({ ...props }: IFileInputControl) {
  return <input id="photo" type="file" className="sr-only" {...props} />;
}
