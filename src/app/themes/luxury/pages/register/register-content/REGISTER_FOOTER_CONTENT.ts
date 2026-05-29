import { AnchorFlexItem } from "@shared/ui/anchor-flex/anchor-flex-item.interface";
import { IconSwitch } from "@shared/ui/icon-flex/icon-switch.type";
import { TextBox } from "@shared/ui/text-box/text-box-item.interface";

export const REGISTER_FOOTER_CONTENT: TextBox[] = [
    {
        id: 0,
        text: ["Do you already have an account?"],
        anchorLink: [
            {
                id: 0,
                title: 'Sign In',
                ariaLabel: 'Login',
                rlink: '/auth/login',
                switchAbleIcon: {
                    type: 'none'
                } as IconSwitch,
            }
        ] as AnchorFlexItem[],
    }
];