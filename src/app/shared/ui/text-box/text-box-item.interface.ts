import { FlexHeadingItem } from "../flex-heading/flex-heading-item";
import { AnchorFlexItem } from "../anchor-flex/anchor-flex-item.interface";
import { ButtonItem } from "../button/button-item.interface";
import { FlexFormItem } from "../flex-form/flex-form-item.interface";

export interface TextBox {
    id: number;
    heading?: FlexHeadingItem;
    text?: string[];
    buttonSection?: ButtonItem[];
    customBlockClassName?: string;
    anchorLink?: AnchorFlexItem[];
    flexFormItem?: FlexFormItem;
    secFigure?: boolean;
};