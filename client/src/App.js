import React from "react";
import FilesUploadComponent from "./components/files-upload.component";
import RegistrationForm from "./components/RegistrationForm";

const App = () => {
  return (
    <div>
      <h1>Registration Form</h1>
      <RegistrationForm />
      <FilesUploadComponent />
    </div>
  );
};

export default App;
