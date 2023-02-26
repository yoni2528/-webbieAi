import React from "react";
import BuildLayout from "../../layout/BuildLayout/BuildLayout";
import MultistepForm from "../../components/MultiStepForm/MultiStepForm";

const Builder = () => {
  return (
    <BuildLayout>
      <div>
        <div>
          <MultistepForm />
        </div>
      </div>
    </BuildLayout>
  );
};

export default Builder;
