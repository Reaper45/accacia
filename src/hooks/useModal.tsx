import { useState } from "react";

const useModal = (initial: boolean) => {
  const [isOpen, setOpen] = useState(initial);

  return {
    isOpen,
    open: () => setOpen(true),
    close: () => setOpen(false),
  };
};

export default useModal;
