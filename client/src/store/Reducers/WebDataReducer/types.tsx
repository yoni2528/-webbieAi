import { WebDetails } from "../../../components/MultiStepForm/Steps/StepHandler/StepHandler";

export interface WebDataAdvantages {
  title: string;
  content: string;
}

export interface WebDataProducts {
  title: string;
  content: string;
}

export interface WebData {
  title: string;
  subtitle: string;
  aboutMe: {
    title: string;
    content: string;
  };
  advantages: Array<WebDataAdvantages>;
  products: Array<WebDataProducts>;
  webId: string;
  template: number;
  color: string;
  [key: string]: any;
}

export interface WebDataState {
  webData: WebData;
  webImages: {
    imageUrl: Array<string>;
  };
  baseData: WebDetails;
}
