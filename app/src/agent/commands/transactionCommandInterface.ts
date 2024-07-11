import { AgentCommandInterface } from './agentCommandInterface';

export const TRANSACTION_COMMAND_NAMES = {
  send: 'send_money',
  swap: 'swap',
};

export interface TransactionCommandInterface extends AgentCommandInterface {
  name: string;
  description: string;
  parameters: {
    sourceAddress?: {
      type: string;
      description: string;
      value: string;
    };
    targetAddress?: {
      type: string;
      description: string;
      value: string;
    };
    amount: {
      type: string;
      description: string;
      value: number;
    };
    currency: {
      type: string;
      description: string;
      value: string;
    };
  };
  required: string[];
}
