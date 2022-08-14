import { createContext, ReactNode, useState } from 'react';

interface IOpenDialog {
  title: string;
  content: JSX.Element;
}

type DialogContextProviderProps = {
  children: ReactNode;
};

interface DialogContext {
  open: boolean;
  openDialog: (dialogContent: IOpenDialog) => void;
  closeDialog: () => void;
  dialog: IOpenDialog | null;
}

export const DialogContext = createContext<DialogContext>({
  open: false,
  openDialog: (dialogContent: IOpenDialog) => {},
  closeDialog: () => {},
  dialog: null,
});

export const DialogContextProivder = ({
  children,
}: DialogContextProviderProps) => {
  const [open, setOpen] = useState(false);
  const [dialog, setDialog] = useState<IOpenDialog | null>({
    title: '',
    content: <></>,
  });

  const openDialog = (dialogContent: IOpenDialog) => {
    setDialog(dialogContent);
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
    setDialog(null);
  };
  return (
    <DialogContext.Provider
      value={{
        open,
        openDialog,
        closeDialog,
        dialog,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};
