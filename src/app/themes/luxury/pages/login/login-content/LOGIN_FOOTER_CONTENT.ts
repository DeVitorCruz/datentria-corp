import { AnchorFlexItem } from "@shared/ui/anchor-flex/anchor-flex-item.interface";
import { IconSwitch } from "@shared/ui/icon-flex/icon-switch.type";
import { TextBox } from "@shared/ui/text-box/text-box-item.interface";

export const LOGIN_FOOTER_CONTENT: TextBox[] = [
    {
        id: 0,
        text: ["Don't have an account?"],
        anchorLink: [
            {
                id: 0,
                title: 'Create free account',
                ariaLabel: 'Register',
                rlink: '/auth/register',
                switchAbleIcon: {
                    type: 'none'
                } as IconSwitch,
            }
        ] as AnchorFlexItem[],
    }
];