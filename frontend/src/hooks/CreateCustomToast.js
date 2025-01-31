import { toaster } from "@/components/ui/toaster";

const showToast = (title, description, type) => {
  console.log("desc is", description);
  toaster.create({
    title: title,
    description: description,
    type: type,
  });
};

export default showToast;
