import ErrorModal from "@components/error-modal/error-modal";
import { isEqual } from "lodash";
import { useState } from "react";

type ErrorState = {
  hasError: boolean;
  title: string;
  message: string;
};

const useErrors = () => {
  const [errorState, setErrorState] = useState<ErrorState>({
    hasError: false,
    title: "",
    message: "",
  });

  const setErrorStateOptimised = (value: ErrorState) => {
    if (!isEqual(errorState, value)) {
      setErrorState(value);
    }
  };

  const setEmptyErrors = () => {
    const emptyErrors: ErrorState = {
      hasError: false,
      title: "",
      message: "",
    };
    setErrorStateOptimised(emptyErrors);
  };

  const setError = (title: string, message: string) => {
    const errors: ErrorState = {
      hasError: true,
      title: title,
      message: message,
    };
    setErrorState(errors);
  };

  const html = (
    <>
      {errorState.hasError && (
        <ErrorModal
          opened={errorState.hasError}
          title={errorState.title}
          message={errorState.message}
        />
      )}
    </>
  );

  return {
    html: html,
    setError: setError,
    setEmptyErrors: setEmptyErrors,
  };
};

export default useErrors;
