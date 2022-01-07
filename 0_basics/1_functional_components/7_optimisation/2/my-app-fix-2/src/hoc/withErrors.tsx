import { ErrorState } from "@business/api-errors";
import ErrorModal from "@components/error-modal/error-modal";
import { isEqual } from "lodash";
import { useState } from "react";

// ----------------------------------------------------------------
// Fix 1. - custom HOC
// ----------------------------------------------------------------

export type WithErrorsProps = {
  setError: any;
  setEmptyErrors: any;
};

const withErrors = (WrappedComponent: any) => {
  return ({ ...props }) => {
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

    return (
      <>
        {errorState.hasError && (
          <ErrorModal
            opened={errorState.hasError}
            title={errorState.title}
            message={errorState.message}
          />
        )}
        <WrappedComponent
          {...props}
          setError={setError}
          setEmptyErrors={setEmptyErrors}
        />
      </>
    );
  };
};

export default withErrors;
