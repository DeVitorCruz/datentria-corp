export interface FlexInputItem {
    value: string;
    placeholder?: string;
    customClassName?: string[];
    label?: string;
    isDisabled: boolean;
    type: 'button' | 'search' | 'submit' | 'text' | 'email';
    matInput?: 'matInput';
};