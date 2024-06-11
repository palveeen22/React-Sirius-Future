import { ReactNode } from "react";

export type TIconProps = {
    src: string | ReactNode
    alt: string;
    className: string;
}

export const Icon = (props: TIconProps) => {
    if (typeof props.src === 'string') {
        return (
            <img src={props.src} alt={props.alt} className={props.className} />
        );
    } else {
        return props.src as ReactNode;
    }
};