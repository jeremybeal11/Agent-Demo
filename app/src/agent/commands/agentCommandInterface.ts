export interface AgentCommandInterface {
  name: string;
  description: string;
  parameters: {
    [key: string]: {
      type: string;
      description: string;
      value: string | number;
    };
  };
  required: string[];
}
