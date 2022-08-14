import { createContext, ReactNode, useState } from 'react';

interface IOpenDialog {
  title: string;
  content: JSX.Element;
}

type DialogContextProviderProps = {
  children: ReactNode;
  content: JSX.Element;
  title: string;
};

interface DialogContext {
  open: boolean;
  openDialog: (dialogContent: IOpenDialog) => void;
  closeDialog: () => void;
  content: JSX.Element | null;
  title: string | null;
  dialog: IOpenDialog | null;
}

export const DialogContext = createContext<DialogContext>({
  open: false,
  openDialog: (dialogContent: IOpenDialog) => {},
  closeDialog: () => {},
  content: <></>,
  title: '',
  dialog: null,
});

export const DialogContextProivder = ({
  children,
  content,
  title,
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
        content,
        title,
        dialog,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};
